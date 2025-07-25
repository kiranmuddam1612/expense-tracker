import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './expenseInput.css';
const Entry = ({onAddExpense}) => {
    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");
    const handleAdd = () => {
    if (!item || !amount) {
        alert("Please enter both description and amount.");
        return;
    }

    fetch('http://localhost:3001/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item, amount: parseFloat(amount) })
    })
    .then(res => res.json())
    .then(() => {
        setItem("");
        setAmount("");
        onAddExpense(); 
    })
    .catch(err => console.error(err));
};

    return (
        <div className="d-flex justify-content-center align-items-center mt-5 bg-light">
            <div className="card p-4 shadow rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <h4 className="text-muted mb-4">Add New Expense</h4>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Expense Description</label>
                    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} className="form-control bg-light border-0" placeholder="e.g., groceries,shopping,coffee with client."/>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Amount (₹)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control bg-light border-0" placeholder="e.g., 500"/>
                </div>
                <button className="btn btn-secondary w-100" onClick={handleAdd}>
                    Add Expense
                </button>
            </div>
        </div>
    );
};

export default Entry;

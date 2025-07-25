import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculateExpenses = ({ expenses }) => {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    return (
        <div className="card p-4 shadow rounded" style={{ minWidth: '300px' }}>
        <h5 className="text-muted mb-2">Total Expenses</h5>
        <h1 className="fw-bold text-secondary" style={{ backgroundColor: '#f4f4f4', padding: '10px 20px', borderRadius: '4px' }}>₹{totalAmount.toFixed(2)}</h1>
        <small className="text-secondary mt-2">Current Total Spending</small>
        </div>
    );
};

export default CalculateExpenses;

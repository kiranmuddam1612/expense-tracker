import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseTable = ({ expenses, handleDelete }) => {
    if (!expenses) {
        return null;
    } 
    return (
        <div className="container-sm mt-5">
             <div className="card p-4 shadow rounded" style={{ maxWidth: '700px', width: '100%' }}>
            <h5>Expense History</h5>
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>Description</th>
                        <th>Amount (₹)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.item}</td>
                            <td>{expense.amount}</td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {expenses.length === 0 && (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No expenses added yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>            
        </div>
        </div>
    );
};

export default ExpenseTable;

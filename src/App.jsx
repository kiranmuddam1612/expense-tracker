import React from "react";
import { useState,useEffect } from "react";
import Navbar from './components/navbar.jsx'
import Entry from './components/expenseInput.jsx'
import ExpenseTable from "./components/expenseTable.jsx";
import TotalExpense from "./components/calculateExpense.jsx";
import './components/footer.jsx'
import Footer from "./components/footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
useEffect(() => {
    fetch('http://localhost:3001/expenses')
        .then(res => res.json())
        .then(data => setExpenses(data))
        .catch(err => console.error(err));
}, []);
    const handleAddExpense = (expense) => {
    fetch('http://localhost:3001/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense)
    })
    .then(res => res.json())
    .then(() => {
        fetch('http://localhost:3001/expenses')
            .then(res => res.json())
            .then(data => setExpenses(data));
    });
};

    const handleDeleteExpense = (index) => {
         fetch(`http://localhost:3001/expenses/${index}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        fetch('http://localhost:3001/expenses')
            .then(res => res.json())
            .then(data => setExpenses(data));
    });
    };
  return (
    <div>
      <Navbar />
      <Entry onAddExpense={handleAddExpense}/>
      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center my-3">
              <ExpenseTable expenses={expenses} handleDelete={handleDeleteExpense} />
                <TotalExpense expenses={expenses} />
            </div>
            <Footer/>
    </div>
    );
    };
    export default App;
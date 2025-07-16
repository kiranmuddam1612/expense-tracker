import React from "react";
import { useState } from "react";
import Navbar from './components/navbar.jsx'
import Entry from './components/expenseInput.jsx'
import ExpenseTable from "./components/expenseTable.jsx";
import TotalExpense from "./components/calculateExpense.jsx";
import './components/footer.jsx'
import Footer from "./components/footer.jsx";
const App = () => {
  const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const handleDeleteExpense = (index) => {
        setExpenses(expenses.filter((_, i) => i !== index));
    };
  return (
    <div>
      <Navbar />
      <Entry onAddExpense={handleAddExpense}/>
       <div className="container d-flex justify-content-center my-3">
                <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} />
                <TotalExpense expenses={expenses} />
            </div>
            <Footer/>
    </div>
    );
    };
    export default App;
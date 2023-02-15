import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const submitData = (enteredData) => {
    const addIdWithData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.addExpenseData(addIdWithData);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={handleShowForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm handleClick={hideForm} onSubmitingData={submitData} />
      )}
    </div>
  );
};

export default NewExpense;

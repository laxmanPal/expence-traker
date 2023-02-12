import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitData = (enteredData) => {
    const addIdWithData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.addExpenseData(addIdWithData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitingData={submitData} />
    </div>
  );
};

export default NewExpense;

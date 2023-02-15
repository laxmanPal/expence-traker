import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitingData(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            name=""
            id=""
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            name=""
            id=""
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.handleClick} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

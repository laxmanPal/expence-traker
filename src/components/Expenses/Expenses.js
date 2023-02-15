import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredArr = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterChangeHandler}
      />
      {filteredArr.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
      ) : (
        filteredArr.map((e) => {
          return (
            <ExpenseItem
              key={e.id}
              title={e.title}
              price={e.amount}
              date={e.date}
            />
          );
        })
      )}
    </Card>
  );
};

export default Expenses;

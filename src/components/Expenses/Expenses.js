import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";
import React from "react";

const Expenses = (props) => {
  const [filterBy, setFilterBy] = useState("2020");

  const changeFilterHandler = (year) => {
    setFilterBy(year);
  };

  const filteredArray = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filterBy
  );

  //console.log(filteredArray);

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterBy} onChangeFilter={changeFilterHandler} />
      {filteredArray.map((expense) => (
        <ExpenseItem key={expense.id} data={expense}></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;

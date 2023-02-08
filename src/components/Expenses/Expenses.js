import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";
import React from "react";

const Expenses = (props) => {
  const [filterBy, setFilterBy] = useState("2019");

  const changeFilterHandler = (year) => {
    setFilterBy(year);
  };

  const filteredArray = props.expenses.filter(
    (expense) => expense.date.getFullYear() === filterBy
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterBy} onChangeFilter={changeFilterHandler} />
      <ExpenseList items={filteredArray} />
    </Card>
  );
};

export default Expenses;

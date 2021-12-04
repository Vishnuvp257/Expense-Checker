import { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredExpense: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const expenseChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredExpense: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      expense: userInput.enteredExpense,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };

    props.onSaveForm(expenseData);

    setUserInput({ enteredExpense: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Expense Name</label>
          <input
            type="text"
            className="input"
            value={userInput.enteredExpense}
            onChange={expenseChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Amount</label>
          <input
            type="number"
            className="input"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Date</label>
          <input
            type="date"
            className="input"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

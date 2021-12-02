import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Expense Name</label>
          <input type="text" className="input" />
        </div>
        <div className="new-expense__control">
          <label className="label">Amount</label>
          <input type="number" className="input" />
        </div>
        <div className="new-expense__control">
          <label className="label">Date</label>
          <input type="date" className="input" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

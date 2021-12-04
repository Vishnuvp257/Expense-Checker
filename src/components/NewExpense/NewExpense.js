import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveFormHandler = (expenseData) => {
    props.onNewExpense({ ...expenseData, id: Math.random().toString() });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={saveFormHandler} />
    </div>
  );
};

export default NewExpense;

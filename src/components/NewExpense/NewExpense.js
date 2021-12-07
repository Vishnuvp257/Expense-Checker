import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveFormHandler = (expenseData) => {
    props.onNewExpense({ id: Math.random().toString(), ...expenseData });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={saveFormHandler} />
    </div>
  );
};

export default NewExpense;

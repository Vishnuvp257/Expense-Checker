import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // console.log(props.data.date);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <Card className="expense-item__price">{props.data.amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;

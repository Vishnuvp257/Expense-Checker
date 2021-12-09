import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {

  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.date.toLocaleString("en-GB", { year: "numeric" });

  return (
    <Card className="expense-date">
      <div className="expense-data__month">{month}</div>
      <div className="expense-data__day">{day}</div>
      <div className="expense-data__year">{year}</div>
    </Card>
  );
};

export default ExpenseDate;

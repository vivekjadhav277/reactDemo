import "./ExpenseDate.css";

function ExpenseDate(props) {
  const { expenseDate } = props;

  const formatedDate = {
    month: expenseDate.toLocaleString("en-US", { month: "long" }),
    day: expenseDate.toLocaleString("en-US", { day: "2-digit" }),
    year: expenseDate.getFullYear(),
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{formatedDate.month}</div>
      <div className="expense-date__day">{formatedDate.day}</div>
      <div className="expense-date__year">{formatedDate.year}</div>
    </div>
  );
}

export default ExpenseDate;

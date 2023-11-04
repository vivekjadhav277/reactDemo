import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { Button } from "@nextui-org/react";

function ExpenseItem(props) {
  const {
    date: expenseDate,
    title: expenseTitle,
    amount: expenseAmount,
  } = props;

  const clickEventHandler = () => {
    console.log("====================================");
    console.log("Click Event Handled!!!!!");
    console.log("====================================");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickEventHandler}>Click Me!</button>
      {/* <Button>Change Title</Button> */}
    </Card>
  );
}

export default ExpenseItem;

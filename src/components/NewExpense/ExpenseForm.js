import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   function titleChangeHandler(event) {
  //     setEnteredTitle(event.target.value);
  //     console.log(enteredTitle);
  //   }
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   function amountChangeHandler(event) {
  //     setEnteredAmount(event.target.value);
  //     console.log(enteredAmount);
  //   }
  //   const [enteredDate, setEnteredDate] = useState("");
  //   function dateChangeHandler(event) {
  //     setEnteredDate(event.target.value);
  //     console.log(enteredDate);
  //   }
  const [userinput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  function titleChangeHandler(event) {
    setUserInput({ ...userinput, enteredTitle: event.target.value });
    console.log(userinput);
  }

  function amountChangeHandler(event) {
    setUserInput({ ...userinput, enteredAmount: event.target.value });
    console.log(userinput);
  }

  function dateChangeHandler(event) {
    setUserInput({ ...userinput, enteredDate: event.target.value });
    console.log(userinput);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;

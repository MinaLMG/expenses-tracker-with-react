import "./ExpenseForm.css";

function ExpenseForm() {
  function titleChangeHandler(event) {
    console.log(event.target.value);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onInput={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" min="2019-01-01" max="2022-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;

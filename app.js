const expenseSubmit = document.querySelector(".expense-submit");
const expenseInput = document.querySelector(".expense-input");
const expenseList = document.querySelector(".expense-table");
const expenseDate = document.querySelector(".expense-date");
const expenseNote = document.querySelector(".expense-note");

expenseSubmit.addEventListener("click", expenseFunction);
expenseList.addEventListener("click", deleteFunction);

function expenseFunction(event) {
  event.preventDefault();

  var empty;
  emptyInput = expenseInput.value;
  emptyDate = expenseDate.value;
  emptyNote = expenseNote.value;

  if (emptyInput == "" || emptyDate == "" || emptyNote == "") {
    alert("You gotta enter the amount, date, and a note my brother/sister");
    expenseInput.value = "";
    expenseNote.value = "";
    expenseDate.value = "";
    return false;
  } else {
    //CreateDiv
    const addDiv = document.createElement("div");
    addDiv.classList.add("new-expense");

    //New Amount
    const newItem = document.createElement("td");
    newItem.innerText = expenseInput.value;
    newItem.classList.add("new-amount");

    //New Date
    const newDate = document.createElement("td");
    newDate.innerText = expenseDate.value;
    newDate.classList.add("new-date");

    //New Note
    const newNote = document.createElement("td");
    newNote.innerText = expenseNote.value;
    newNote.classList.add("new-note");

    //Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    //Add Data to Div
    addDiv.appendChild(newItem);
    addDiv.appendChild(newDate);
    addDiv.appendChild(newNote);
    addDiv.appendChild(deleteBtn);

    //Add New Div to Table
    expenseList.appendChild(addDiv);

    //Reset Fields
    expenseInput.value = "";
    expenseNote.value = "";
    expenseDate.value = "";

    //Doesn't run with blank fields
  }
}

function deleteFunction(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const gone = item.parentElement;
    gone.remove();
  }
}

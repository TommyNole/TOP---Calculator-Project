const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete-btn");
const pointButton = document.getElementById("decimal");
const historyDisplay = document.getElementById("history-display");
const resultDisplay = document.getElementById("result-display");

// window.addEventListener("keydown", handleKeyboardInput);
// equalsButton.addEventListener("click", evaluate);
// clearButton.addEventListener("click", clear);
// deleteButton.addEventListener("click", deleteNumber);
// deleteButton.addEventListener("click", () => {
//   console.log(button.textContent);
// });
// pointButton.addEventListener("click", appendPoint);

// test event listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});

// test delete button
deleteButton.addEventListener("click", () => {
  console.log(deleteButton.textContent);
});

// test clear button
clearButton.addEventListener("click", () => {
  console.log(clearButton.textContent);
});

// test equals button
equalsButton.addEventListener("click", () => {
  console.log(equalsButton.textContent);
});

// test point button
pointButton.addEventListener("click", () => {
  console.log(pointButton.textContent);
});

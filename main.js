const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete-btn");
const pointButton = document.getElementById("decimal");
const historyDisplay = document.getElementById("history-display");
const resultDisplay = document.getElementById("result-display");

// Event Listeners
window.addEventListener("keydown", handleKeyboardInput);
equalsButton.addEventListener("click", convertToMathSymbols);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (resultDisplay.textContent === "0") {
      resultDisplay.textContent = button.textContent;
    } else {
      resultDisplay.textContent += button.textContent;
    }
  });
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resultDisplay.textContent += button.textContent;
  });
});
1;

// Functions
function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) {
    if (resultDisplay.textContent === "0") {
      resultDisplay.textContent = e.key;
    } else {
      resultDisplay.textContent += e.key;
    }
  } else if (e.key === ".") {
    if (resultDisplay.textContent.includes(".")) return;
    resultDisplay.textContent += ".";
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    resultDisplay.textContent += e.key;
  } else if (e.key === "Enter") {
    convertToMathSymbols();
  } else if (e.key === "Backspace") {
    resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
  } else if (e.key === "Escape") {
    clear();
  }
}

function calculate() {
  let result = 0;
  let operation = resultDisplay.textContent;
  let numbers = operation.split(/[-+*/]/);
  let operators = operation
    .split(/[0-9.]/)
    .filter((operator) => operator !== "");
  if (numbers.length === 1) return;
  if (numbers.length === 2) {
    result = operateTwoNumbers(operators[0], numbers[0], numbers[1]);
  } else {
    for (let i = 0; i < operators.length; i++) {
      if (i === 0) {
        result = operateTwoNumbers(operators[i], numbers[i], numbers[i + 1]);
      } else {
        result = operateTwoNumbers(operators[i], result, numbers[i + 1]);
      }
    }
  }

  if (result === undefined || result === null) return clear();

  historyDisplay.textContent = operation;
  resultDisplay.textContent = result;
}

function operateTwoNumbers(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === "0" || num2 === 0) {
    alert("Oh no you don't!! You can't divide by 0!");
    clear();
    return;
  }
  return Number((num1 / num2).toFixed(6));
}

function clear() {
  historyDisplay.textContent = "0";
  resultDisplay.textContent = "0";
}

function deleteNumber() {
  resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
}

function appendPoint() {
  if (resultDisplay.textContent.includes(".")) return;
  resultDisplay.textContent += ".";
}

function convertToMathSymbols() {
  let operation = resultDisplay.textContent;
  operation = operation.replace(/÷/g, "/");
  operation = operation.replace(/x/g, "*");
  resultDisplay.textContent = operation;
  calculate();
}

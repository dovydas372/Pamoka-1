let input = document.getElementById("calc-input");
let firstNubmer = 0;
let secondNumber = 0;
let action = "+";
let answer = 0;
let inputActionCount = 1;
let calculationSpan = document.getElementById("calculation");

let history = [];

function onNumberClick(a) {
  if (parseInt(input.value[0]) == 0) {
    input.value = "";
  } else {
    input.value += a;
  }
}

function onActionClick(a) {
  if (inputActionCount < 2) {
    input.value += " " + a + " ";
    action = a;
    inputActionCount++;
  } else {
    let splitted = input.value.split(" ");
    firstNubmer = parseFloat(splitted[0]);
    secondNumber = parseFloat(splitted[2]);
    splitted[1] = a;
    input.value = `${firstNubmer} ${splitted[1]} `;
    if (secondNumber) {
      input.value += secondNumber;
    }
  }
}

function onCountClick() {
  let splitted = input.value.split(" ");
  firstNubmer = parseFloat(splitted[0]);
  action = splitted[1];
  secondNumber = parseFloat(splitted[2]);
  inputActionCount = 1;
  claculateAnswer();
  input.value = parseFloat(answer).toFixed(2);
  calculationSpan.innerText = `${firstNubmer} ${action} ${secondNumber}`;
  addToHistory();
}

function claculateAnswer() {
  switch (action) {
    case "+":
      answer = firstNubmer + secondNumber;
      break;
    case "-":
      answer = firstNubmer - secondNumber;
      break;
    case "x":
      answer = firstNubmer * secondNumber;
      break;
    case "/":
      answer = firstNubmer / secondNumber;
      break;
  }
}

function onClickClean() {
  firstNubmer = 0;
  secondNumber = 0;
  action = "+";
  answer = 0;
  input.value = "";
  calculationSpan.innerText = "";
}

function addToHistory() {
  let historyItem = {
    firstNubmer,
    action,
    secondNumber,
    answer,
  };
  history.unshift(historyItem);
  if (history.length > 5) {
    history.pop();
  }
}

document.getElementById("show-history").onclick = function () {
  let formatted = history.map(
    (x) => `<p>${x.firstNubmer} ${x.action} ${x.secondNumber} = ${x.answer}</p>`
  );

  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.style.display = "block";
  historyBlock.innerHTML = formatted.join("");
};

document.getElementById("close-history").onclick = function () {
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.style.display = "none";
};

document.getElementById("clear-history").onclick = function () {
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.innerHTML = "";

  history = [];
};

function istrintiPaskutiniSimboli() {
  let sukarpytas = input.value.split("");
  let sukarpytasIstrintas = sukarpytas.splice(0, sukarpytas.length - 1);
  input.value = sukarpytasIstrintas.join("");
}

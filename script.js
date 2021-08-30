"use strict";
window.addEventListener("load", start);

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");
const firstInput = document.querySelector("#firstnumber");
const secondInput = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");
const roundingCheckbox = document.querySelector("#doround");
const selectDecimals = document.querySelector("#decimals");
const resultsList = document.querySelector("#results");
let result;

function start() {
  console.log("start");
  calculateBtn.addEventListener("click", getInputs);
  clearBtn.addEventListener("click", clearResultsList);
}

function getInputs() {
  console.log("getInputs");
  const inputOneValue = Number(firstInput.value);
  const inputTwoValue = Number(secondInput.value);
  const operatorValue = operator.value;

  calculateResult(inputOneValue, inputTwoValue, operatorValue);
}

function calculateResult(firstInputNumber, secondInputNumber, operator) {
  console.log("calculateResult");
  switch (operator) {
    case "add":
      result = firstInputNumber + secondInputNumber;
      break;
    case "sub":
      result = firstInputNumber - secondInputNumber;
      break;
    case "mul":
      result = firstInputNumber * secondInputNumber;
      break;
    case "div":
      result = firstInputNumber / secondInputNumber;
      break;
  }
  console.log(result);
  checkForRounding();
}

function checkForRounding() {
  console.log("checkForRounding");
  if (roundingCheckbox.checked) {
    getRoundInput();
  } else {
    showResult();
  }
}

function getRoundInput() {
  console.log("getRoundInput");
  const decimals = parseInt(selectDecimals.value);
  roundResult(decimals);
}

function roundResult(decimals) {
  console.log("roundResult");
  result = result.toFixed(decimals);
  showResult();
}

function showResult() {
  console.log("showResult");
  firstInput.value = result;
  resultsList.appendChild(createLi());
  scrollToBottom();
}

function scrollToBottom() {
  console.log("scrollToBottom");
  resultsList.lastChild.scrollIntoView();
}

function clearResultsList() {
  console.log("clearResultsList");
  resultsList.innerHTML = "";
}

function createLi() {
  const li = document.createElement("li");
  const textLi = document.createTextNode(`${result}`);
  li.appendChild(textLi);
  return li;
}
document.querySelector("button").addEventListener("click", clickCounter);
document.addEventListener("DOMContentLoaded", showValue);

let counter = document.getElementById("button");

function showValue() {
  counter.innerHTML = `Current count = ${localStorage.clickcount || 0}`;
}

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 0;
    }
    showValue();
  }
}


document.querySelector("button").addEventListener("click", clickCounter);
document.addEventListener("DOMContentLoaded", showValue);

let counter = document.getElementById("button");
let amount = localStorage.getItem("count")

function showValue() {
  counter.innerHTML = `Current count = ${localStorage.getItem("count") || 0}`;
  if (!localStorage.getItem("count")){
    localStorage.setItem("count", amount)
  }
}

function clickCounter() {
  // if (typeof(Storage) !== "undefined") {
  //   if (localStorage.clickcount) {
  //     localStorage.clickcount = Number(localStorage.clickcount) + 1;
  //   } else {
  //     localStorage.clickcount = 0;
  //   }
    amount++
    localStorage.setItem("count", amount)
    showValue();
}

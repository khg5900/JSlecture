const e6Click = document.querySelector(".e6-2");
const e6Score = document.querySelector(".e6-3");
const e6Num = document.querySelector(".e6-4");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function e6Splice() {
  const e6index = Math.floor(Math.random() * arr.length);
  e6Score.innerText = arr[e6index];
  arr.splice(e6index, 1);
  e6Num.innerText = arr.join(" ");
}

e6Click.addEventListener("click", e6Splice);

const e13Click = document.querySelector(".e13-1");
const e13Result = document.querySelector(".e13-2");

let e13Arr = [];
let e13Num = 0;

function makeItem(text) {
  const e13Item = document.createElement("div");
  e13Item.innerText = text;
  e13Result.appendChild(e13Item);
}

function saveItems() {
  localStorage.setItem("e13", JSON.stringify(e13Arr));
}
function e13Event() {
  e13Num += 1;
  makeItem(e13Num);
  e13Arr.push(e13Num);
  saveItems();
}

e13Click.addEventListener("click", e13Event);

const beforeCheck = localStorage.getItem("e13");

if (beforeCheck) {
  e13Arr = JSON.parse(beforeCheck);
  e13Arr.forEach((item) => makeItem(item));
}

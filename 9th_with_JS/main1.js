const e1Upclick = document.querySelector(`.e1-1`);
const e1Counter = document.querySelector(`.e1-2`);
const e1Downclick = document.querySelector(`.e1-3`);

function e1Upevent() {
  e1Counter.innerText = parseInt(e1Counter1) + 1;
}
function e1Downevent() {
  e1Counter.innerText = parseInt(e1Counter1) - 1;
}

e1Upclick.addEventListener(`click`, e1Upevent);
e1Downclick.addEventListener(`click`, e1Downevent);

const e4Click = document.querySelector(".e4-1");
const e4Num = document.querySelector(".e4-2");

function e4Event() {
  e4Num.innerText = Math.floor(Math.random() * 11);
}

e4Click.addEventListener("click", e4Event);

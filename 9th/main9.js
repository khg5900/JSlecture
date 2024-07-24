const e9Click = document.querySelector(".e9-1");
const e9Items = document.querySelector(".e9-2");

let e9Num = 0;

function e9Event() {
  e9Num = e9Num + 1;
  const e9NewDiv = document.createElement("div");
  e9NewDiv.innerText = e9Num;
  e9Items.appendChild(e9NewDiv);
}
e9Click.addEventListener("click", e9Event);
//  제일 중요한 부분

// const ClickDiv = document.querySelector(".div-class");

// function divClick() {
//   ClickDiv.innerText = "Clicked me!!!";
// }

// ClickDiv.addEventListener("click", divClick);

// 1. 만든다
// 2. 내용을 쓴다.
// 3. 집어넣는다.

const ClickButton = document.querySelector(".button-class");
const ul = document.querySelector(".ul-class");

let num = 1;

function buttonClick() {
  const newli = document.createElement("li");
  newli.innerText = `${num}번째 클릭!`;
  ul.appendChild(newli);
  num++;
}
ClickButton.addEventListener("click", buttonClick);

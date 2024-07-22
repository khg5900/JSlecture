const startButton = document.querySelector(".start-button");
const todayName = document.querySelector(".today-name");
const todayLuck = document.querySelector(".today-luck");

const resultName = [];

function NameSelect(num) {
  const indexNum = Math.floor(Math.random() * initialArr.length);
  resultName[num] = initialArr[indexNum];
}

function LuckSelect() {
  const indexNum = Math.floor(Math.random() * words.length);
  console.log(indexNum);
  todayLuck.innerText = words[indexNum];
}

function startEvent() {
  LuckSelect();
  NameSelect(0);
  NameSelect(1);
  todayName.innerText = resultName.join("");
}

startButton.addEventListener("click", startEvent);

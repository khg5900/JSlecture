const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset-all");
const numUl = document.querySelector(".num-ul");
const bonusUl = document.querySelector(".bonus-ul");

const numArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45,
];

const selectedNumArr = [];

function selectNum(numArr) {
  const index = Math.floor(Math.random() * numArr.length);
  selectedNumArr.push(numArr[index]);
  numArr.splice(index, 1);
  return numArr;
}
function makeLi(location, num) {
  const newLi = document.createElement("li");
  newLi.innerText = num;
  location.appendChild(newLi);
}
function resetResult() {
  selectedNumArr.splice(0);
  numUl.replaceChild();
  bonusUl.replaceChild();
}
function lotto() {
  startButton.innerText = "Restart!";
  startButton.disabled = true;
  resetButton.disabled = true;
  const copyNumArr = [...numArr];
  resetResult();

  for (let i = 0; i < 6; i++) {
    selectNum(copyNumArr);
  }

  selectedNumArr.sort((a, b) => a - b);

  for (let num in selectedNumArr) {
    setTimeout(() => {
      makeLi(numUl, selectedNumArr[num]);
    }, 500 + 300 * num);
  }
  const bonusnum = copyNumArr[Math.floor(Math.random() * copyNumArr.length)];
  setTimeout(() => makeLi(bonusUl, bonusnum), 2300);
  setTimeout(() => {
    startButton.disabled = false;
    resetButton.disabled = false;
  });
}
function resetLotto() {
  resetResult();
  startButton.innerText = `Start!`;
}

startButton.addEventListener("click", lotto);
resetButton.addEventListener("click", resetLotto);

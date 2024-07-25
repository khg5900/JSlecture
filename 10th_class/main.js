const upButton = document.querySelector(".score-up");
const downButton = document.querySelector(".score-down");
const score = document.querySelector(".score");

function upClick() {
  score.innerText = parseInt(score.innerText) + 1;
}
function downClick() {
  if (+score.innerText > 0) {
    score.innerText = +score.innerText - 1;
  } else {
    score.classList.add("score-zero");
    setTimeout(() => {
      score.classList.remove("score-zero");
    }, 1000);
  }
}

upButton.addEventListener("click", upClick);
downButton.addEventListener("click", downClick);

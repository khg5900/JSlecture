const e7Click = document.querySelector(".e7-1");
const e7Score = document.querySelector(".e7-2");

function e7event() {
  const e7Interval = setInterval(() => {
    e7Score.innerText = parseInt(e7Score.innerText) + 1;
    if (parseInt(e7Score.innerText) === 6) {
      clearInterval(e7Interval);
      e7Score.innerText = 0;
    }
  }, 1000);
}

e7Click.addEventListener("click", e7event);

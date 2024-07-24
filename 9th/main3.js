const e3Red = document.querySelector(".e3-1");

function e3Event() {
  e3Red.classList.add("color-red");
  setTimeout(() => {
    e3Red.classList.remove("color-red");
  }, 3000);
}

e3Red.addEventListener("click", e3Event);

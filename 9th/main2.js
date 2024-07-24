const e2Click = document.querySelector(".e2-1");
const e2Color = document.querySelector(".e2-2");

function e2Event() {
  //   if (e2Color.classList.contains(!"color-red")) {
  //     e2Color.classList.add("color-red");
  //   } else {e2Color.classList.remove("color-red"); }

  e2Color.classList.toggle("color-red");
}

e2Click.addEventListener("click", e2Event);

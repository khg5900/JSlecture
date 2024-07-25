const e12Button1 = document.querySelector(".e12-1");
const e12Button2 = document.querySelector(".e12-2");

function e12Event() {
  if (e12Button1.disabled === true) {
    e12Button1.disabled = false;
    e12Button2.disabled = true;
  } else {
    e12Button1.disabled = true;
    e12Button2.disabled = false;
  }
}
e12Button1.addEventListener("click", e12Event);
e12Button2.addEventListener("click", e12Event);

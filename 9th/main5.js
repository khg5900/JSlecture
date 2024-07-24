const e5Click1 = document.querySelector(".e5-1");
const e5Click2 = document.querySelector(".e5-2");

function e5Event1(event) {
  event.target.classList.remove();
}
function e5Event2(event) {
  event.target.classList.add("color-red");
}
e5Click1.addEventListener("click", e5Event1);
e5Click2.addEventListener("click", e5Event2);

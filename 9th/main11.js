const e11Top = document.querySelector(".e11-1");
const e11E2 = document.querySelector(".e11-2");

function e11Event1() {
  window.scrollTo(0, 0);
}
function e11Event2() {
  e7Click.scrollIntoView({ behavior: "smooth", block: "center" });
}

e11Top.addEventListener("click", e11Event1);
e11E2.addEventListener("click", e11Event2);

const e8Form = document.querySelector(".e8-2");
const e8Input = document.querySelector(".e8-3");
const e8Result = document.querySelector(".e8-4");

function e8Event(event) {
  event.preventDefault();
  e8Result.innerText = e8Input.value;
  e8Input.value = "";
}

e8Form.addEventListener("submit", e8Event);

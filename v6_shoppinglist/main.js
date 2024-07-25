const shoppingForm = document.querySelector(".content-form");
const contentName = document.querySelector(".content-name");
const contentCount = document.querySelector(".content-count");
const contentList = document.querySelector(".content-ul");

const SHOPPiNG_KEY = "shopping";
let shoppingList = [];

function saveShoppingList() {
  localStorage.setItem(SHOPPiNG_KEY, JSON.stringify(shoppingList));
}

function deleteContent(event) {
  const li = event.target.parentElement;
  li.remove();
  shoppingList = shoppingList.filter((item) => item.id !== parseInt(li.id));
  saveShoppingList();
}

function makeLi(newContent) {
  const li = document.querySelector("li");
  const nameDiv = document.querySelector("div");
  const countDiv = document.querySelector("div");
  const deleteDiv = document.querySelector("div");
  li.classList.add("content-li");

  li.id = newContent.id;
  nameDiv.classList.add("li-name");
  countDiv.classList.add("li-count");
  deleteDiv.classList.add("li-delete");
  nameDiv.innerText = newContent.name;
  countDiv.innerText = newContent.count;
  deleteDiv.innerText = "X";
  deleteDiv.addEventListener("click", deleteContent);

  li.appendChild(nameDiv);
  li.appendChild(countDiv);
  li.appendChild(deleteDiv);
  contentList.appendChild(li);
}

function addContent(event) {
  event.preventDefault();
  const conName = contentName.value;
  contentName.value = "";
  const conCount = contentCount.value;
  contentCount.value = "";
  const newContent = {
    name: conName,
    count: conCount,
    id: Date.now(),
  };
  shoppingList.push(newContent);
  makeLi(newContent);
  saveShoppingList();
}

shoppingForm.addEventListener("submit", addContent);

const savedShoppingList = localStorage.getItem(SHOPPiNG_KEY);

if (savedShoppingList) {
  const parsedList = JSON.parse(savedShoppingList);
  shoppingList = parsedList;
  shoppingList.foreach((item) => makeLi(item));
}

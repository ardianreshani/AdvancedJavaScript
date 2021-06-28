const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");
  list.appendChild(item);
  input.value = " ";

  item.addEventListener("click", () => {
    item.remove();
  });
});

const checkArray = ["test", "hello", 23, "world"];

if (checkArray == "") {
  console.log("empty");
}
if (checkArray.length < 5) {
  console.log("small");
}
if (checkArray.length < 10) {
  console.log("medium");
}

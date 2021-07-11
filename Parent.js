const grandParent = document.querySelector("#grand-parent");
// converting HTML Collation to Array
const grandParentArray = Array.from(grandParent.children);
grandParentArray.forEach((item) => {
  item.style.color = "red";
});
document.getElementById;
const parentOne = grandParent.children[0];
const parentTwo = parentOne.nextElementSibling;
parentTwo.style.backgroundColor = "blue";

const childOne = document.querySelector("#first-child");
// const parentFromChildren = childOne.parentElement;
// const grandFromChildren = parentFromChildren.parentElement;
const grandParentWithCloset = childOne.closest(".grand-parent");
grandParentWithCloset.textContent;
console.log(grandParentWithCloset.textContent);

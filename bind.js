window.name = "Global Name";

const person = {
  name: "aRdd",
};
function printName() {
  console.log(this.name);
}
const newPrintName = printName.bind(person);
newPrintName();

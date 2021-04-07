// const propertyName = "name";
// const firstName = "Ardian";
// const age = 23;

// const person = {
//   [propertyName]: firstName,
//   //firstName, // shorthand if the name is the same
//   age,
//   sayHi() {
//     console.log("hi");
//   },
// };
// console.log(person);

// null coalescing

function greet(firstName = "Sally", lastName = "Smith") {
  console.log(`${firstName} ${lastName}`);
}

console.log(greet());
function greet(firstName = "Sally", lastName) {
  lastName = lastName ?? "Smith"; // if lasName is null or undefind then lastName will be Smith
  console.log(`${firstName} ${lastName}`);
}

console.log(greet("ardi", null));

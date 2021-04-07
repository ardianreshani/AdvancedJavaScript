// Array Destructuring
// const array = ["A", "R", "D", "I"];
// const [first, second, , f, five] = array;
// console.log(first);
// console.log(second);
// console.log(thert);

// function addAndMultiply(a, b) {
//   return [a + b, a * b];
// }
// const [sum, produc] = addAndMultiply(8, 3);
// console.log(sum);
// console.log(produc);
// function nameToFirstAndLast(fullName) {
//     return fullName.split(" ");
//   }
//   const [firstName, lastName] = nameToFirstAndLast("Ardian Reshani");
//   console.log(firstName);
//   console.log(lastName);

// Object Destructuring
// const person = {
//   name: "Ardian",
//   age: 23,
//   favoriteFood: "Pica",
//   address: {
//     street: "Test 1234",
//     city: "Radovlijca",
//   },
// };
// const { name, age } = person;
//Rename the key of object
// const { name: firstName, age, } = person;

// address
// const { address } = person;
// const { street, city } = address;

// short hand
// const {
//   address: { street, city, zipcode = "4240" },
// } = person;

// console.log(street);
// console.log(city);
// console.log(zipcode);

// function nameToFirstAndLast(fullName) {
//   const [firstName, lastName] = fullName.split(" ");
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }
// const { firstName, lastName } = nameToFirstAndLast("Ardian Reshani");
// console.log(firstName);
// console.log(lastName);

// function addAndMultiply({ a, b }) {
//   return [a + b, a * b];
// }
// const [sum, product] = addAndMultiply({ a: 2, b: 3 });
// console.log(sum, product);

const person = {
  name: "Ardian",
  age: 23,
  favoriteFood: "Pica",
  address: {
    street: "Test 1234",
    city: "Radovlijca",
  },
};

function printStreet(person) {
  console.log(person?.address?.street);
}
printStreet(person);

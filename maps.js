// const CURRENCY_MAP = {
//   Albania: "Lek",
//   Kosovo: "EUR",
// };

// const map = new Map([
//   ["Albania", "Lek"],
//   [("India", "EUR")],
//   [{ a: 1 }, "USD"], //OBJ can use
//   [false, "USD"], // Boolan
// ]);
// console.log(map);

// const user = {
//   name: "Ardian",
// };

// const map = new Map([[user, { age: 24 }]]);
// console.log(map.get(user));

const map = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [4, "d"],
]);

map.get(); // to get the item
map.set(); // to set the item
map.has(6); // to check if one item already is  true/false
map.delete(1); // delete one item
map.clear(); // to delete all items

console.log(map);
// map.forEach((value, key) => {
//   console.log(value, key); // -->
// });

// with out new MAP()
// const obj1 = {
//   a: 1, // cant have number as key we need string "1"
//   b: 2,
//   c: 3,
//   d: 4,
// };
// Object.entries(obj1).forEach(([key, value]) => console.log(key, value));

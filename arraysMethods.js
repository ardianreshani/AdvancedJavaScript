const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.forEach((item) => {
//   console.log(item * 2);
// });

// console.log(numbers);

// const a = numbers.map((item) => {
//   return item * 10;
// });
// console.log(a);

// numbers.filter((element) => element);
// const findNumber = numbers.find((item) => item > 3);
// console.log(findNumber);

// const someNumber = numbers.some((some) => some > 2);
// console.log(someNumber);

const items = [
  { price: 10 },
  { price: 30 },
  { price: 50 },
  { price: 25 },
  { price: 12 },
];

const c = items.reduce((sum, item) => {
  sum + item.price;
}, 0);
console.log(c);

const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 4;

if (!uniqueList.includes(newNumber)) {
  uniqueList.add(newNumber);
}
// console.log(uniqueList); // -> [1, 2, 3, 4, 5] we dont get daubel 4

//  new Set([])...

// const set = new Set([1, 2, 3, 4, 5]);
// set.add(6); // add one new number
// set.add(1); // don't add a new number if already exist
// set.has(6); // true or false
// set.delete(1); // delete item by value
// set.clear(); // delete all item
// // set.forEach((value) => console.log(value));
// console.log(set);

// convert this funciton with new Set
function removeDups(array) {
  return [...new Set(array)];
}

console.log(removeDups([1, 2, 3, 4, 3, 5, 6, 1, 2, 2, 3]));

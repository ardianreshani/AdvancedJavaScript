// const person = {
//   firstName: "Ardian",
//   lastName: "Reshani",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     [this.firstName, this.lastName] = value.split(" ");
//   },
// };
// person.fullName = "Ard Dev";
// console.log(person.fullName);

// const user = {
//   _username: "user123", // privat
//   get username() {
//     return this._username;
//   },
//   set username(value) {
//     if (value.length > 5) {
//       this._username = value;
//     }
//   },
// };
// user.username = "Ardian";
// console.log(user.username);

const age = {
  age: 24,
  get ageInYear() {
    const date = new Date();
    return date.getFullYear() - this.age;
  },
};
console.log(age.ageInYear);

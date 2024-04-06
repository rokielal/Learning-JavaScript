// In javascript function is the combo of function and object

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "toon na na na la la ";
//   },
// };

// this createUser here is known as constructor function
function createUser(firstName, lastName, email, age, address) {
//   const user = Object.create(userMethods); // here we are setting __proto__ to userMethods
  const user = Object.create(createUser.prototype); // In this case we setting __proto__ to create.prototype
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
// console.log(createUser.prototype);
// Instead or user methods saparately we can use the prototype of function createUser to add methods

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};

createUser.prototype.is18 = function () {
    return this.age >= 18;
}

createUser.prototype.sing = function () {
    return "toon na na na la la ";
}

const user1 = createUser("harshit", "vashsith", "harshit@gmail.com", 9);
const user2 = createUser("Manoranjan", "Gupta", "manoranjan@gmail.com", 32);
const user3 = createUser("mohit", "vashsitha", "harshit@gmail.com", 17);

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

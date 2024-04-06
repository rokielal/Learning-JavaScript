// new keyword -->  it will do three work
// 1) it will create empty object
// 2) return this
// 3) new keyword will create relation between prototype and object (const user = Object.create(createUser.prototype))

// __proto__ is equal to [[prototype]]

// this createUser here is known as constructor function
function CreateUser(firstName, lastName, email, age, address) {
  //   const user = Object.create(createUser.prototype); // new keyword will create object and set its __proto__

  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  //   return this; // here we can omit return bcz new keyword will automatically return
}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "toon na na na la la ";
};

const user1 = new CreateUser("harshit", "vashsith", "harshit@gmail.com", 9);
const user2 = new CreateUser("Manoranjan", "Gupta", "manoranjan@gmail.com", 32);
const user3 = new CreateUser("mohit", "vashsitha", "harshit@gmail.com", 17);

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

//  Class

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("Constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }

  is18() {
    return this.age >= 18;
  }

  sing() {
    return "toon na na na la la ";
  }
}

// function CreateUser(firstName, lastName, email, age, address) {
//     //   const user = Object.create(createUser.prototype); // new keyword will create object and set its __proto__

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     //   return this; // here we can omit return bcz new keyword will automatically return
//   }
// CreateUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old.`;
// };

// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };

// CreateUser.prototype.sing = function () {
//   return "toon na na na la la ";
// };

// Constructor will be called only if new keyword is present else it will throw error
const user1 = new CreateUser("harshit", "vashsith", "harshit@gmail.com", 9);
// const user2 = new CreateUser("Manoranjan", "Gupta", "manoranjan@gmail.com", 32);
// const user3 = new CreateUser("mohit", "vashsitha", "harshit@gmail.com", 17);

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

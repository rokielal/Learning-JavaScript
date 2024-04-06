// function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);

// In the above code if have many user than that many about and is18 methods will be made in the memory which will take that much space. To resolve that problem we can  create Methods once outside the object and pass its reference to the object

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user3.about());

// In the above code there is a problem that if we want to add more methods we can add it but we have to pass its reference in the main function.
// To solve this problem we can use the __proto__

// __proto__  example

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// Here I have created an empty object obj2 with Object.create and make obj1 its __proto__
// Now obj2 will inherites the obj1 all properties under __proto__

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2); //{key3: 'value3'}
console.log(obj2.key2); //value2 --> here in obj2 key2 is not present but due to __proto__ js will check for key2 in obj1 and if there key2 is present that it will print it.

// ------------------------------------
// By using __prot__ we can solve the problem to pass all methods in the function as reference by creating object using Object.create and setting its __proto__ to userMethods

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "toon na na na la la ";
  },
};

// this createUser here is known as constructor function
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // here we have created an empty object and set its __proto__ to userMethods. Now we can access all the methods present in userMethods object.
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser("harshit", "vashsith", "harshit@gmail.com", 9);
const user2 = createUser("Manoranjan", "Gupta", "manoranjan@gmail.com", 32);
const user3 = createUser("mohit", "vashsitha", "harshit@gmail.com", 17);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

console.log(user2);
console.log(user2.about());
console.log(user2.is18());
console.log(user2.sing());
// console.log(user3.sing());


// pass by value and pass by reference

// const person ={
//     name: 'John'
// }

// // person = {  // Error: Assignment to constant variable.
// //     name:"Peter"
// // }

// person.name = "peter" // {name: 'peter'} as it is pass by reference

// console.log(person); 

//primitives or scalars => strings, numbers, booleans etc => passed by value
//objects => passed by reference (like object, function and arrays)

// let greeting ="Hello !"

// let message = "Hi"

// //mesage and greetings are two independent variables each holding the same value
// console.log(greeting,message) //Hello ! Hi
// console.log(greeting == message)  // false, as both greeting and message has different value

// greeting = 'Hi'
// console.log(greeting, message) // Hi Hi

// console.log(greeting == message) // true, as after changing the value of greeting both are Hi

//Note => variable assigned to an object it does not stores the object but its address
//in the memory in other words reference to it

// let user = {
//     name: 'John'
// }

// it means user is pointing to address of the object  

// let user = {
//     name: 'John'
// }

// let user2 = user

// // user => address of {
// //     name: "John"
// // }


// // user2 => address of {
// //     name: "John"
// // }

// console.log(user == user2) // true, as both are pointing to same address (pass by reference)

// console.log(user === user2) //true

// user2.name = "peter"
// console.log(user) // peter,  as user and user2 are pointing same aaddress change is user2 or user will reflect to both

//Two objects are equal only if they are the same object


// let a = {};

// let b = a; //copy the reference

// //a => {} <= b // pointing to same object address

// console.log(a == b) // true
// console.log(a === b) // true




// let a = {};

// let b = {}; //copy the reference

// //in this case a => {} and b => {}, pointing to different objects address

// console.log(a == b) // false
// console.log(a === b) // fasle

// const person = {
//     name : 'john'
// }

// // person.name = 'Peter';
// // //the reference of person is same thay y no error and its properties can change
// // console.log(person)


// //=here in this case the reference of person is changing therefore error
// person ={
//     name : 'john'
// }

// What if we want to copy the original object

// by using spread operator

// let user ={
//     name: 'John',
//     age: 25
// }

// let user1 = {...user}

// // console.log(user); // {name: 'John', age: 25}
// // console.log(user1) // {name: 'John', age: 25}

// // Both are giving same O/P as they are copied

// // if we change value of one object other will not change

// user.name = 'Peter';
// console.log(user); //{name: 'Peter', age: 25}

// console.log(user1); // {name: 'John', age: 25}

//nested object
// let person = {
//     name : 'john',
//     age: 25,
//     details: {
//         isProgrammer: true
//     }
// }

// let person2 = {...person}

// person2.name = "peter"

// person2.details.isProgrammer = false

// person


// let person = {
//     name : 'john',
//     age: 25,
// }

// let clone = {};

// for (let key in person){
//     clone[key] = person[key];
// }

// clone.name = 'Peter'

// console.log(person.name)


// let person = {
//     name : 'john',
//     age: 25,
// }

// let personClone = Object.assign({}, person);

// personClone


//Nested cloning or deep copying or structured cloning

// let person = {
//     name: 'john',
//     age: 25,
//     details: {
//         height: 180,
//         width: 60
//     }
// }
// //Creates a deep clone of an object.
// let personClone = structuredClone(person);

// console.log(person.details === personClone.details) // false

greetings()
//due to hosting fucntion declaration will be called first
//as it gets assigned memory in the memory creation phase
//whereas var one will be undefined

var greetings = function () {
    console.log('First Greetings')
}
//at this point var greetings has overwritten the previous greeting function
//so first greetings

greetings()

function greetings() {
    console.log('Second Greetings')
}

greetings()
//since there is only one greeting function left so first greeting


// let user = {name : "John"};

// let user2 = user;


// console.log(user == user2)
// console.log(user === user2)


// let a = {};

// let b = {};

// //independent objects

// console.log(a == b)
// console.log(a == b)


// const people = [{ name: 'Punit' }, { name: 'Sanyog' }];


// const peopleWithS = people.filter((person) => person.name.startsWith('S'));

// peopleWithS

// peopleWithS[0].name = 'Neetu';
// peopleWithS

// people



// //pass by value
// let number = 100;

// let numberCopy = number;

// number = 200
// numberCopy

// Object destructuring

// const person = {
//     name :"Manoranjan",
//     age : 32,
//     year : 2023
// }

// const personName = person.name;
// const personAge = person.age;
// console.log(personName,personAge); //Manoranjan 32


// shortcut

// const {name,age} = person;
// console.log(name, age); // Manoranjan 32 :- year is not printed

// const {name, age, year} = person;
// console.log(name,age,year); //Manoranjan 32 2023

// const {name, year} = person;
// console.log(name,year); // Manoranjan 2023

// If we want to change the value name in destructuring

// const {name:personName , age:personAge} = person;
// // console.log(name,age) // error 
// console.log(personName,personAge); //Manoranjan 32

// If we have 4 element in object out which 2 we have to destructure and remaining we have to put in the form of object

const person1 = {
    name :"Manoranjan",
    age : 32,
    year : 1991,
    location : 'Asaonsol'
}

const {name, age, ...restElement} = person1;

console.log(restElement);//{year: 1991, location: 'Asaonsol'}
console.log(name,age,restElement); // Manoranjan 32 {year: 1991, location: 'Asaonsol'}
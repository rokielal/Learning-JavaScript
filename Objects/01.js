// Objects  : It stored data in key value pair and does not have index and it is reference type like array

// how to create object

const person = {
    name: "Manoranjan",
    age: 30,
    city: "Asansol"
}
// console.log(person);
// console.log(typeof(person));

// // how to access data from object : to access properties(key, value) we can use Dot notation and bracket notation

// Dot notation
// console.log(person.name)
// console.log(person.age)

// Bracket Notation
// access data using square bracket
// console.log(person["name"]);
// console.log(person["age"]);


const person1 = {
    name: "manoranjan",
    age: 32,
    hobbies:['cricket','learninig','youtube']
}

// console.log(person1);
// console.log(person1.hobbies);

// // how to add key value pair to existing object
    // using dot notation

// person1.gender="male";
// console.log(person1);

    // using bracket notation
    person1["gender"] = "male";
    console.log(person1);

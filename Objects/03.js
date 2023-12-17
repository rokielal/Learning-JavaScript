// How to iterate object

const person = {
    name: "Manoranjan",
    age : 32,
    "person hobbies" : ['cricket', 'movies']
}

// two ways to iterate through object
// for in loop
// Objects.keys

// for in loop
// for(let key in person){
//     // console.log(key);  // it will print key 

//     // console.log(person.key); // it will give undefined

//     // console.log(person[key]); // it will give value

//     console.log(`${key} : ${person[key]}`) // it will give key value pair
// }

// console.log(Object.keys(person));

for(let key of Object.keys(person)){
    // console.log(key); // it will give key
    console.log(person[key]); // it will give value
    console.log(key,":",person[key]); // it will give key  : value
}
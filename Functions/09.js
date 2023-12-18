// Parameter destructure

// it is mostly used in React

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

// printDetails(person);

function printDetails({firstName, gender, age}) { 
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);
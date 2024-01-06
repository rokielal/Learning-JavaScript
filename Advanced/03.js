// lexical environment and scope chain

// const lastName = 'Gupta';

// const printName = function() {
//     const firstName = "Mano";
//     console.log(firstName);
//     console.log(lastName);
// }

// printName();

// Same Output just to understand lexical environment
const lastName = 'Gupta';

const printName = function() {
    const firstName = "Mano";
    function myFunc(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunc();
}

printName();
// Undefinded


// let firstName;
// console.log(typeof firstName) // undefined

// firstName = "Manoranjan";
// console.log(typeof firstName, firstName)

// const lastName; // error,  Missing initializer in const declaration

// null

// let myVariable = null;
// console.log(myVariable);
// console.log(typeof myVariable); // object
// // in JS typeof null will show as object, it is a bug in JS

// BigInt

// let myNumber = BigInt(123);
// let sameNumber = 12n
// console.log(myNumber + sameNumber);

// we can perform arthimatic operation in BigInt condition both the numbers must be of type BigInt

let myNumber = 123; 
let sameNumber = 12n
console.log(myNumber + sameNumber); // error Cannot mix BigInt and other types, use explicit conversions
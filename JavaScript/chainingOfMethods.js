 //chaining of methods

// const numbers = [10, -20, 30, -40, 50];

// // All positive numbers:
// // All negative numbers:
// // Positive numbers under 50:

// const positiveNum = numbers.filter((num) => num > 0);
                    //Or
//  const positiveNum = numbers.filter(num => num > 0);
// console.log(positiveNum); // [10, 30, 50]

// // const negativeNum = numbers.filter((num) => num < 0);
// //or
// const negativeNum = numbers.filter(num => num < 0);
// console.log(negativeNum); // [-20, -40]

// // const numUnder50 = numbers.filter((num) => num > 0 && num < 50);
// //or
// const numUnder50 = numbers.filter(num => num > 0 && num < 50);
// console.log(numUnder50); //[10, 30]

// // example of chaining of methods is below, where we can user more than one methods

// // Positive numbers under 50:

// // const under50 = numbers.filter((num) => num > 0).filter((num) => num < 50)
//                             //Or
// const under50 = numbers.filter(num => num > 0).filter(num => num < 50)

// console.log(under50) // [10, 30]

// Another Example

// const numbers = [10,20,30,40,50];

// // multiply all number by 10 

// const mulBy10 = numbers.map(num => num * 10);
// console.log(mulBy10)

// Now we have to return array of object

// const numMultiplyBy10 = numbers.map(function (num){

//     return {
//         value: num * 10
//     }
// })
// console.log(numMultiplyBy10); //. it will return array of object


// Get positive number and then multiply by 10


const numbers = [10,-4,23,-67,33,5,-22];

const result = numbers.filter(num => num > 0).map(num => num * 10)
console.log(result); //[100, 230, 330, 50]
 


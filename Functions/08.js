// Rest Parameter

// function myFunc (a,b,c) {

//     console.log(`a is ${a}`); 
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(2,3,4,5,6,7,8); 
//output : in output 5,6,7,8 will not come as we have only three parameter but if we want to have first two value of a and b as 2,3 and c should store all the remaining arguments, we can use rest operator

// function myFunc2 (a,b,...c) {  // using rest operator

//     console.log(`a is ${a}`); 
//     console.log(`b is ${b}`);
//     // console.log(`c is ${c}`); // c is 4,5,6,7,8
//     console.log(`c is`, c); // c is [4, 5, 6, 7, 8]
// }

// myFunc2(2,3,4,5,6,7,8); 


// Add all number 

// function addAll (...numbers) {
//     console.log(numbers); // it will print all the number passed as arguments
//     console.log(typeof(numbers)); // Array type will come as object
//     console.log(Array.isArray(numbers)); // to check if it is array or not we can use Array.isArray()
// }

// addAll(1,2,3,4,5,6);

function addAll (...numbers) {
    let sum = 0;
    // for(let i=0; i<numbers.length; i++){
    //     sum += numbers[i];

    // }
    //or
    for(let number of numbers){
        sum += number;
    }
    console.log(sum);
}

addAll(1,2,3,4,5,6,7,8,9);

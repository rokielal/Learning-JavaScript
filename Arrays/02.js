// array push , pop

//push : add element at last 

// let fruits = ["apple", "mango"]
// console.log(fruits);

// fruits.push("banana");
// console.log(fruits);

// pop : remove element from last and we can store it in any variable and use it 

// let fruits = ["apple", "mango","banana"]
// console.log(fruits);

// let poppedItem = fruits.pop();
// console.log(poppedItem)
// console.log(fruits);

// // here we again added the popped item to the array using push method
// fruits.push(poppedItem);
// console.log(fruits);


// array shift , unshift

// unshift :  it will add element at the starting

// let fruits = ["apple", "mango","banana"];
// console.log(fruits);

// fruits.unshift("orange");
// console.log(fruits);

// shift : it will remove the element from starting
let fruits = ["apple", "mango","banana"];
console.log(fruits);

let removedItem = fruits.shift();
console.log(fruits); // apple is removed
console.log("removed item is", removedItem)

// Note : push and pop are faster than shift and unsift bcz push and pop are adding or deleting element from last no need to change the position of every element in array but as  shift and unsift are adding or deleting element from begning it has to move all the elements position in an array








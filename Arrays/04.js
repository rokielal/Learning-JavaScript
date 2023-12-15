// how to clone array

// let array1 = ["item1", "item2"];
// let array2 = array1;
// // to check both array are equal
// console.log(array1 === array2) // true

// using slice method

//slice
//syntax => array.slice(startIndex, endIndex)

//=> it returns a new array from startIndex to endIndex but not including endIndex
// if 2 argument is not passed it goes till the end


// let charArray = ['h', 'e', 'l', 'l', 'o'];

// let returnedElements = charArray.slice(1, 3) //['e', 'l']
// console.log(returnedElements)
// console.log(charArray)

// console.log(charArray.slice(-2)) // startindex but not end index so output will be ['l', 'o']

// let copiedArray = charArray.slice()
// console.log(copiedArray)

//concat

//creates a new array that includes values from others arrays

//syntax => array.concat(arg1, arg2....)

// let nums = [10, 20];

// // let newNum1 = nums.concat([30, 40])
// // console.log(newNum1) // [10, 20, 30, 40]

// let newNum2 = nums.concat([30, 40], [40,50, 60])
// console.log(newNum2);  //[10, 20, 30, 40, 40, 50, 60]

//spread operator --> Converting array into list.
                        // copy array ot object

//reverse => array into list


// console.log(Math.max(10, 20, 30));

// let arr = [10, 20, 30];

// console.log(Math.max(...arr));

// let array2 = [...arr];
// console.log(array2); // [10, 20, 30]


// let arr1 = [10, 20, 30];

// let arr2 = [40, 50, 60];

// let merged = [...arr1, ...arr2, 100, 200, 300];
// console.log(merged); //[10, 20, 30, 40, 50, 60, 100, 200, 300]

//Note u can use this with any iterable

// let message = 'Hello';

// console.log([...message]);
// console.log(...message);

// let message = 'Hello';

// //Array.from coverts iterable into an array
// console.log(Array.from(message))


//copy array an object

// let person = {
//     name : "Manoranjan",
//     age : 32
// }

// let personCopy = {...person};

// console.log(personCopy); //{name: 'Manoranjan', age: 32}

// //others ways of copying


// let arr = [10, 20, 30];
// let person = {
//     name: 'John',
//     age: 30
// }

// let personCopy = Object.assign({}, person);

// let arrCopy = Object.assign([], arr)

// // //Note => arrays , functions are just objects in javascript
// console.log(arrCopy) // [10, 20, 30]
// console.log(personCopy) //{name: 'John', age: 30}

// let user = {
//     name: 'Peter',
//     age: 20,
//     roll: 50
// }

// console.log(delete user.roll) // true
// console.log(user)

// let nums = [10, 20, 30];

// delete nums[1]; //this only delets the value and not rearrange the elements

// console.log(nums);

//so use special methods like  splice to delete

//splice => swiss knife for arrays => that means it can do everything like
// insert, remove and replace elements

//syntax =>  array.splice(startIndex, deleteCount, element1, ...., elementN)


// let fruits = ['apples', 'oranges', 'bananas'];

// // fruits.splice(1, 1); //from index 1 remove 1 element

// fruits.splice(0, 1, 'grapes', 'mangoes')  // element will be added first

// let removedFruits = fruits.splice(0, 2) // if we want to work on the removed element we can store 
                                            //it in any variable and it will return array


// console.log(fruits);
// console.log(removedFruits);

// fruits.splice(2, 0, 'grapes', 'mangoes');
// console.log(fruits);


//Note => negative indexes are also allowed

// let nums = [1, 2, 5];

// //from index -1 (one step from end)
// //delete 0 elements
// //then add 3 and 4

// nums.splice(-1, 0, 3, 4);

// console.log(nums); // [1,2,3,4,5]

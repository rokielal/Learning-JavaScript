
//Arrays => ordered collections

// let arr = [
//     { name: 'John', age: 20 },
//     'apples',
//     20,
//     true,
//     [10, 20]
// ]

// console.log(arr)

// let nums = [10, 20, 30, 40, 50];


// console.log(nums[nums.length - 1]) // last index

// console.log(nums.at(-1)) // last index of any aaray


// let nums = [10, 20, 30, 40];

// queue and stack
//methods that works with end of the array


// nums.push(60);
// console.log(nums)
// let poppedItem = nums.pop()
// console.log(poppedItem)
// console.log(nums)

//methods that works with start of the array


// nums.unshift(60);
// console.log(nums)
// let poppedItem = nums.shift()
// console.log(poppedItem)
// console.log(nums)
// nums.shift()
// console.log(nums)

// More Array Methods


//array methods

//Add/ remove elements

//push, pop, unShift, shift


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



//how many ways we have covered to create a copy of the array

//spread syntax
//slice
//Object.assign()

//concat

//creates a new array that includes values from others arrays

//syntax => array.concat(arg1, arg2....)

// let nums = [10, 20];

// let newNums = nums.concat([30, 40])

// let newNums = nums.concat([30, 40], [40,50, 60])


// let newNums = nums.concat([30, 40], 50, 60)


// console.log(newNums)


// console.log(nums.concat([30, 40]))

// console.log(nums)


// For Seaching in array search.js is created   



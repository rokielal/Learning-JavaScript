// Map, filter and reduce are also array method

// IQ What are map, filter and reduce ?

//filter => it is similar to findindex but it returns an array of objects of similar element 
//in case of array object and array in case of array

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Peter" },
//     { id: 3, name: "Mary" },
//     { id: 4, name: "John" },
// ];

// Normal function

// let user = users.filter(function(item, index, array){
    
//     if(item.id == 2){
//         return item;
//     }
// })
// console.log(user);

// Arrow function

// let user = users.filter(item => item.id == 3)
// console.log(user);

// console.log(user1 = users.filter(item => item.id == 1));

// Normal function
// let filteredUser = users.filter(function(item, index, array){
//     if(item.id == 3){
//         return item
//     }
// })
// console.log(filteredUser);

// Arrow function

// let filteredUser = users.filter(item => item.id != 2)
// console.log(filteredUser);

// Note:  Any function which takes another function as argument are higher order function
// eg: find, findIndex, findLastIndex, map,filter,reduce etc

// Question: Do filter function modify the original array?
// Answer : No, filter does not modify original array it returns new array

//eg:

// let number = [10,20,30,40]

// let filteredNums = number.filter(num => num < 40)

// console.log(filteredNums); // [10, 20, 30] filtered numbers
// console.log(number); // [10, 20, 30, 40] orginal number

// Map => it is most used method
// to transform an array we use map method

// let numbers = [1,2,3]

// let transformNums = numbers.map(num => num = num * 2)

// console.log(numbers) // original array
// console.log(transformNums); // transfomed array with doubling

// let namesOfUser = ["Soni", "Ivanshika", "Manoranjan","Ranjan"]

// //Ques:  return length of the names in array

// let lengthOfNames = namesOfUser.map(names => names.length)

// console.log(lengthOfNames);
 
// let numbers =[1,2,3,4,5,6,7]

// // reverse the array

// console.log(numbers.reverse()); // reverse method is used to reverse the array

// split method is used to convert string into array
//syntax: stringName.split(delimeter)

// let names ="Manoranjan,Soni,Ivanshika"

// let arr = names.split(",");
// console.log(arr); //['Manoranjan', 'Soni', 'Ivanshika'] // length of array will be count of item in array

// let arr1 = names.split(", ");
// console.log(arr1); //['Manoranjan,Soni,Ivanshika'] // length of array will be 1 bcz of space after ,

// let arr2 = names.split(",", 2);
// console.log(arr2); //['Manoranjan', 'Soni']

// // convert string to letter
// let message = "hello"

// let arr3 = message.split("")
// console.log(arr3) // ['h', 'e', 'l', 'l', 'o']

// Join method: it does the reverse of split it convert array into string

// let arrayOfname = ["Manoranja","Soni","Ivansika"]

// // let convertString = arrayOfname.join(",") //Manoranja,Soni,Ivansika
// // let convertString = arrayOfname.join(";") //Manoranja;Soni;Ivansika
// // let convertString = arrayOfname.join("") // ManoranjaSoniIvansika
// let convertString = arrayOfname.join(" ") // Manoranja Soni Ivansika

// console.log(convertString) 

// iterate the array

//array.forEach(function(item, index, array){

// })

// const num = [10,20,30,40,50]

// // num.forEach(function(num){
// //     console.log(num);
// // })

// // multiply every number by 2

// num.forEach(function(num){
//     console.log(num * 2);

// })

//some method => checks if there is at least one element in the array satisfies the given
//condition
//return true if the element is found 
//further iteration will stop if the element is found

// const num = [1,2,3,4,5]

// const hasEven = num.some((num) => num % 2 === 0);
// console.log(hasEven) // true


//every method => checks if all the elements matches the given condition
//iterates over elements and returns true only if all the elements meet a specific
//condition

// const numbers = [2, 4, 6, 8, 10];

// const hasEven = numbers.every((numbers) => numbers % 2 ===0);
// console.log(hasEven); // true, as all numbers are even means every condition is true


// const numbers = [2, 4, 3, 8, 10];

// const hasEven = numbers.every((numbers) => numbers % 2 === 0);
// console.log(hasEven) // false,  as for one element 3 condition is false

//toString()

//used to convert array into string representation like join

// const fruits = ['apples', 'bananas', 'oranges'];

// // const fruitString = fruits.toString();
// const fruitString = fruits.join(",")

// console.log(fruitString)

// Reduce Method: 
//one of the hardest of all the array methods
//reduce method gives you the power to create anything you want from an array

//Syntax: array.reduce((accumulator, current, index, array) => {

// }, argument2)

//basic sum or total 

// const numbers = [10,20,30,40]

// const sum = numbers.reduce((acc, curr, index, array) => {
//         // console.log(acc); // 0 undefined undefined undefined
//         // console.log(curr); // 10 20 30 40 
//         // console.log(index); // 0 1 2 3 
//         // console.log(array); //[10, 20, 30, 40],[10, 20, 30, 40],[10, 20, 30, 40],[10, 20, 30, 40]
        
// },0)

// const sum = numbers.reduce((acc, curr) => acc +curr, 0)

//   console.log(sum); //100

// Calculate the average using reduce
// const numbers = [10,20,30,40,50]

// var count = 0;
// for(let num in numbers){
//     count ++;
// }
// console.log(count); // 4, total number of element in array 

// console.log(numbers.length) // 4, total number of element in array 

// // const avg = numbers.reduce((acc, curr) => acc + curr , 0)/count

// const avg = numbers.reduce((acc, curr) => acc + curr , 0)/numbers.length

// console.log(avg); // 30


// Reduce Question : - 
// Given an array of groups, where each group is represented by a count-value pair, 
//how can you use the reduce() method in JavaScript to transform the groups into a new array
// based on the count and value pairs within each group?

// Input:
// let groups = [
//     [2, 3],
//     [3, 7],
//     [4, 5]
// ];
// Output

// let result = [3, 3, 7, 7, 7, 5, 5, 5, 5];
// console.log(result); // [3, 3, 7, 7, 7, 5, 5, 5, 5]















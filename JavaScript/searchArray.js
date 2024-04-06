//Search in an array

//indexOf/lastIndexOf/includes

//syntax is array.indexOf(value, startIndex) => looks for the value starting from index startIndex 
            //  and returns the index if value is present otherwise it returns -1

//syntax is array.includes(value, startIndex) =>  looks for the value starting from index startIndex  
            //  and returns true if found

// let array = [10, 20, false,1]

// console.log(array.indexOf(0))

// console.log(array.indexOf(false))

// console.log(array.indexOf(null))

// console.log(array.includes(1))

//exception => include method handles NaN correctly

// let array = [NaN];

// console.log(array.indexOf(NaN)) //-1
// console.log(array.includes(NaN)) // true
 
//lastIndexOf => array.lastIndexOf is same as indexOf but looks from right to left


// let fruits = ['apples', 'mangoes', 'apples'];

// console.log(fruits.indexOf('apples')) // left to right
// console.log(fruits.lastIndexOf('apples')) // right to left

// more Search methods 

//find / findIndex/ findLastIndex
//find syntax => array.find(function(item, index, array){
// 
// })

// let users = [
//     {id:1, name:"John"},
//     {id:2, name: "Peter"},
//     {id:3, name:"Marty"}
// ];

// let user = users.find(function(item, index, array){
//     return item.id == 1; // expicit return, when we write return by our own
// })
// console.log(user);

// let user = users.find((item, index, array) => item.id==3);
// console.log(user);

// let user = users.find(item => item.id==3);
// console.log(user);

//array.findIndex it has the same syntax as find method

// let user = users.findIndex(item => item.id==3);
// console.log(user);

//array.findLastIndex method is like findIndex , but searchers from right to left
//just like lastIndexOf

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Peter" },
//     { id: 3, name: "Mary" },
//     { id: 4, name: "John" },
// ];
// console.log(users.findIndex(user => user.name == 'John'))
// console.log(users.findLastIndex(user => user.name == 'John'))




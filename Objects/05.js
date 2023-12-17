// Spread operator

// *** case 1 : in case of Array
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// // const newArr = [...arr1];
// // console.log(newArr);  [1, 2, 3]

// // const newArr = [...arr2];
// // console.log(newArr);  [4, 5, 6]

// // const newArr = [...arr1,...arr2];
// // console.log(newArr);  [1, 2, 3, 4, 5, 6]


// const newArr = [...arr1,...arr2, 89 ,69];
// console.log(newArr);   [1, 2, 3, 4, 5, 6, 89, 69]

// spread operator can be used in all iterables

// const newArray = [..."Manoranjan"];
// console.log(newArray); ['M', 'a', 'n', 'o', 'r', 'a', 'n', 'j', 'a', 'n']

// *** case 2 : in case of object

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }


// const obj2 = {
//     key3 : "value3",
//     key4 : "value4",
// }

// const newObj = {...obj1};
// console.log(newObj); //{key1: 'value1', key2: 'value2'}

// const newObj = {...obj2};
// console.log(newObj); // {key3: 'value3', key4: 'value4'}

// const newObj = {...obj1,...obj2};
// console.log(newObj); //{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}

// In object more than one key is not allowed

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }


// const obj2 = {
//     key1 : "Unique value",
//     key3 : "value3",
//     key4 : "value4",
// }

// const newObj = {...obj1, ...obj2}

// console.log(newObj) // {key1: 'Unique value', key2: 'value2', key3: 'value3', key4: 'value4'}:- here key1 value will be Unique value as it is assigned later

// adding new key
// const newObj = {...obj2, ...obj1, key4 : "Added value"}
// console.log(newObj); // {key1: 'value1', key2:'value2', key3: 'value3', key4: 'Added value'} :- Here key1 will have value1 as obj1 is assigned later to newObj and new key4 will be added.

// const str = {..."abcdef"};
// console.log(str); //{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f'}

// const arr = {...['mango','banana','grapes']};
// console.log(arr); // {0: 'mango', 1: 'banana', 2: 'grapes'}
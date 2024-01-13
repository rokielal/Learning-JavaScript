//setTimeout() - it will take a function and time to execute the setTimeout. Diagram name: SetTimeout_with_oms. It will return ID which can be used for clearing timeout if not required

// console.log("script start");

// setTimeout(() => {
//     console.log("Inside setTimeout")
// },1000);

// for(let i=1; i<100; i++){
//     console.log(".....")
// }

// console.log("script end");

/*
script start
js:10 .....
 script end
Inside setTimeout */

// console.log("script start");

// const id = setTimeout(() => {
//     console.log("Inside setTimeout")
// },1000);

// for(let i=1; i<100; i++){
//     console.log(".....")
// }

// console.log("setTimeout id is", id);

// clearTimeout(id); // Now setTimeout function from webApi will be removed and "Inside setTimeout" function will not rum

// console.log("script end");

/*
script start
9903.js:28 .....
setTimeout id is 1
script end */

// Note seTimeOut with 0ms will work same as with 1000 or 100 ms the setTimeout function will go to webAPI and JS will run the remaining codes once the time provided in setTimeout is over but js code is not executed completely the setTimeout function will wait in the callback queue by the event loop(event loop checks the call stack is empty or not unless call stack is not empty event loop will not allow the settimoeut function to enter the call stack)


console.log("script start");

const id = setTimeout(() => {
    console.log("Inside setTimeout")
},0);

for(let i=1; i<100; i++){
    console.log(".....")
}

console.log("script end");

/*/*
script start
js:10 .....
13 script end
 Inside setTimeout */
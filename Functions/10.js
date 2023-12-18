// callback functions  without parameter

function myFunc2(name){
    console.log("inside my func 2")
    
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback();
}


myFunc(myFunc2);

// Callback with parameter

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);
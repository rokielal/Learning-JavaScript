//how function return promise

function ricePromise(){
    const bucket = ['cofee', 'rice', 'vegetable', 'chips','salt'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetable")){
            resolve("We can eat");
        }
        else{
            reject("Something is missing, we cannot do it!!!");
        }
    })
}

// to return promise by function we have to write function name(here function name is ricePromise) and call it by paranthesis
ricePromise().then((value)=>{
    console.log(value,"food");
}).catch((value)=>{
    console.log(value);
});

//promise.resolve : it will always return a promise than we can add another than and form promise chaining
//promise chaining


//example

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("Manoranjan");
    })
}

myPromise()
    .then((val)=>{
    console.log(val);
    // val += " Lal"; // if forget to write return than it will give undefined
    return val += " Lal";
    })
    .then((val)=>{
        console.log(val);
        // val += " Gupta"; // if forget to write return than it will give undefined 
        return val += " Gupta";
    })
    .then((val)=>{
        console.log(val);  
    })
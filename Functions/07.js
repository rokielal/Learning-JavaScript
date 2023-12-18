// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){ // without default parameter
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=0){ // // with default parameter
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);




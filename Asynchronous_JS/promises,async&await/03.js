// promise & setTimeout
// want to resolve or reject promise after 2 sceonds

// function myPromise() {
//     return new Promise((resolve, reject)=>{
//         // const value = true;
//         const value = false;

//         setTimeout(()=>{
//             if(value){
//                 resolve("resolved");
//             }else{
//                 reject("rejected");
//             }
//         },2000);
//     })
// }

// myPromise().then((val)=>{
//     console.log("Promise",val);
// }).catch((val)=>{
//     console.log("promise",val);
// })

const myPromise = new Promise((resolve, reject) => {
  let val = true;

  setTimeout(() => {
    if (val) {
      resolve(" resolved");
    } else {
      reject("rejected");
    }
  }, 2000);
});

myPromise
  .then((val) => {
    console.log("Promise is ", val);
  })
  .catch((val) => {
    console.log("Promise is ", val);
  });

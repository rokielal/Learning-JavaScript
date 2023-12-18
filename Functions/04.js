 // Function inside function

 function app () {

   const myFunc = ()=> {
         console.log("My Function is running....")
   }

   const sum  = (num1,num2) => num1 + num2;

   
   myFunc();
   
    console.log("App is running...");
    myFunc();
   //  console.log(sum(6,2));
 }

 app();
 
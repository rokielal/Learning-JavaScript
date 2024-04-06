// console.log("Hello");

// function greetings() {

//     console.log("How are you?");
// }

// greetings();
// console.log("Bye"); 

/*Hello
 How are you?
 Bye
 */

 // question 1:
// let message = "Hello";

// console.log(message);

// function greetings() {

//     console.log("Greeting for the day");
// }

// greetings();

// console.log("Bye");

// question 2:

// function firstfunc() {

//     console.log(10+20);
// }

// function secondfunc() {

//     console.log("Hi there")
// }

// function thirdfunc() {

//     console.log("Hello World")
// }

// firstfunc();
// secondfunc();
// thirdfunc();

function firstfunc() {

    console.log(10+20);

    function secondfunc() {

        console.log("Hi there")

        function thirdfunc() {

            console.log("Hello World")
        }
        thirdfunc();
        
    }
    secondfunc();

}

firstfunc();

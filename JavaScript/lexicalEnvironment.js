

//Lexical Environment = curent scope + parents lexical environment
//Lexical Environment = local environment  + parents lexical environment

//lexical Environment => refers to the part of program's memory where variables and functions are 
//stored and accessed during execution of code

// var a = 10

// function x() {

//     //y's parent scope

//     function y() {
//         //local environment
//         console.log(a)
//     }
//     y()

//     console.log(a)

// }
// console.log(a)

// x()



// var a = 100

// function x() {

//     function y() {

//         function z() {

//             console.log(a)
//         }
//         z()
//     }
//     y()
// }
// x()


// function x() {

//     function y() {

//         function z() {
//             var a = 100

//         }
//         z()
//     }
//     y()
// }
// x()
// console.log(a)

// When we declare any variable without var,let or const Js will declare it in global variable

function x() {

    function y() {
 
        function z() {
            a = 100

        }
        z()
    }
    y()
}
x()
console.log(a)


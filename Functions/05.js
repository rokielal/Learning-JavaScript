// Lexical Scope


const myvar = 88;

function myApp () {

    const myvar = 34;

    function myfunc () {
        
        function myfunc2 () {
            const myvar = 44;
            console.log("inside my function2" , myvar);
        }
        myfunc2();
        console.log("Myfunc is running", myvar)
    }

    console.log("My App is running");
    myfunc();
    console.log("My App is running", myvar);
}

myApp()
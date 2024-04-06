// Synchrounous Vs Asynchrounous

// Sync
console.log("Start");
console.log("code running line by line");
console.log("end");
// output
// Start
// code running line by line
// end

// Async

console.log("Start");

setTimeout(() => {
  console.log("Code will execute after 5 sec");
}, 5000);

console.log("End");

// output
// Start
// end
// Code will execute after 5 sec

// Callback:
// A callback function is a function that is passed as an argument to another function and is invoked after a particular event or operation occurs.
// Callback functions are commonly used in asynchronous programming to handle tasks that occur after a certain event or operation completes, such as fetching data from a server or responding to user interactions.
// Callback functions can be synchronous or asynchronous, depending on the context in which they are used.

// promises:
const cart = ["shoes", "Paint", "kutras"];

// Aynce operation using callback
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});
// Issue with the above code
// callback hell
// Inversion of control

// To solve the callback issue we can use promise
const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// Event loop working 
/*
In JavaScript, the event loop is a crucial concept for managing asynchronous operations and ensuring that the program remains responsive. The event loop is part of the JavaScript runtime environment and enables the execution of non-blocking code. Here's a simplified explanation of how the event loop works in JavaScript:


1) Call Stack:

JavaScript is single-threaded, meaning it has one call stack that executes one operation at a time.
The call stack is a data structure that keeps track of function calls. When a function is called, a new frame is pushed onto the stack. When the function completes, its frame is popped off the stack.

2) Callback Queue:

JavaScript uses an event-driven model, and many operations are asynchronous, such as I/O operations (e.g., fetching data, reading files) or timers (e.g., setTimeout).
When an asynchronous operation completes, its callback function is not immediately executed. Instead, the callback is placed in the callback queue.

3) Event Loop:

The event loop constantly checks if the call stack is empty. If the call stack is empty and there are callbacks in the callback queue, the event loop will take a callback and push it onto the call stack for execution.
This process repeats, allowing asynchronous operations to be handled without blocking the main thread.

*/
console.log('Start');

// Asynchronous operation with a callback
setTimeout(function() {
  console.log('Async Operation Completed');
}, 2000);

console.log('End');

/*In this example, the order of execution would be:

"Start" is logged.
setTimeout is encountered, and its callback is scheduled to be executed after 2000 milliseconds.
"End" is logged.
The event loop detects that the call stack is empty and there's a callback in the queue, so it pushes the callback onto the call stack.
"Async Operation Completed" is logged. */

//This asynchronous behavior allows JavaScript to handle time-consuming tasks without freezing the user interface or blocking the execution of other code. 

// Diagram name: EventLoop

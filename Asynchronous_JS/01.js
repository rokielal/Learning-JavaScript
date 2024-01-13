// synchronous and asynchronous 

/*Synchronous and asynchronous programming are two different approaches to handling tasks and managing the flow of execution in JavaScript.

Synchronous Programming:

In synchronous programming, tasks are executed one after the other, in a sequential order.
Each task must complete before the next one starts, and the program waits for each operation to finish before moving on to the next.
This can lead to blocking behavior, where the program is halted while waiting for an operation to complete, making it less responsive.
Example of synchronous code: */

console.log("Start");

function synchronousTask() {
  console.log("Task 1");
  console.log("Task 2");
}

synchronousTask();

console.log("End");

//In this example, "Task 1" and "Task 2" are executed in order, and the program waits for synchronousTask() to complete before moving to the next line.

/*Asynchronous Programming:

In asynchronous programming, tasks are initiated but may not complete immediately. Instead, a callback function is used to handle the completion of the task.
This allows other tasks to continue running while waiting for non-blocking operations to finish.
Asynchronous programming is often used for tasks such as fetching data from a server, handling user input, or dealing with I/O operations.
Example of asynchronous code using callbacks: */

console.log("Start");

function asynchronousTask(callback) {
  setTimeout(function() {
    console.log("Async Task Completed");
    callback();
  }, 2000);
}

asynchronousTask(function() {
  console.log("Callback Executed");
});

console.log("End");

//In this example, asynchronousTask uses setTimeout to simulate an asynchronous operation. The program doesn't wait for the operation to complete and continues executing the next lines. The callback is invoked when the asynchronous task finishes.

//In modern JavaScript, Promises and async/await are commonly used to handle asynchronous code in a more organized and readable way. They provide a more structured and maintainable approach to dealing with asynchronous operations compared to traditional callback-based code.
// Question: Event bubbling
//Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element(i.e, global window object).

// By default, event handlers triggered in event bubbling phase

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   alert("Button Clicked");
// });

// form.addEventListener("click", () => {
//   alert("Form clicked");
// });

// div.addEventListener("click", () => {
//   alert("Div clicked");
// });

// Question: event.target vs this.target vs event.currentTarget
// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const btn = document.querySelector("button");

// btn.addEventListener("click", func);

// form.addEventListener("click", func);

// div.addEventListener("click", func);

// function func(event) {
//   alert(
//     "current target =" +
//       event.currentTarget.tagName +
//       " " +
//       "and target element is=" +
//       event.target.tagName +
//       " " +
//       "and this element is =" +
//       this.tagName
//   );
// }

// Question: What is event Capturing and Trickling.
//Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost target DOM element.

// You need to pass true value for addEventListener method to trigger event handlers in event capturing phase.

const div = document.querySelector("div");
const form = document.querySelector("form");
const btn = document.querySelector("button");

// btn.addEventListener(
//   "click",
//   () => {
//     alert("Button Clicked");
//   },
//   {
//     capture: true,
//   }
// );

// form.addEventListener(
//   "click",
//   () => {
//     alert("Form clicked");
//   },
//   {
//     capture: true,
//   }
// );

// div.addEventListener(
//   "click",
//   () => {
//     alert("Div clicked");
//   },
//   {
//     capture: true,
//   }
// );

// Another way
btn.addEventListener(
  "click",
  () => {
    alert("Button Clicked");
  },
  true
);

form.addEventListener(
  "click",
  () => {
    alert("Form clicked");
  },
  true
);

div.addEventListener(
  "click",
  () => {
    alert("Div clicked");
  },
  true
);
// Question: How to stop event from propagation
// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   alert("Button Clicked");
//   e.stopPropagation();
// });

// form.addEventListener("click", (e) => {
//   alert("Form clicked");

// });

// div.addEventListener("click", () => {
//   alert("Div clicked");
// });

// Question: What is event deligation
// Event deligation is adding a event listner to parent element instead of its descendent element

const parentCntainer = document.querySelector(".parent");

parentCntainer.addEventListener("click", (e) => {
  console.log(e.target.textContent);

  //   if (e.target.textContent === "profile") {
  //     window.location.href += "/" + e.target.className;
  //   } else if (e.target.textContent === "menu") {
  //     window.location.href += "/" + e.target.className;
  //   } else if (e.target.textContent === "contact") {
  //     window.location.href += "/" + e.target.className;
  //   } else if (e.target.textContent === "social") {
  //     window.location.href += "/" + e.target.className;
  //   }
});

const body = document.body;
const button = document.querySelector("button");
const startBtn = document.querySelector(".btn");
// console.log(button)

const intervalID = setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red},${green},${blue})`;

  // console.log(rgb);
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalID); // it will stop background change color

  button.textContent = body.style.background;
});

const btn = document.querySelector(".increament_btn");
const btnPress = document.querySelector(".increament_pressed");
const count = document.querySelector(".increament_count");

let pressCount = 0;
let triggeredCount = 0;

// https://lodash.com/docs/4.17.15#debounce

const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressCount;
  debouncedCount();
});

// Throttling

const increasedBtn = document.querySelector(".increased_btn");
const increasedBtnPressed = document.querySelector(".increased_pressed");
const increasedCount = document.querySelector(".increased_count");

let increasedPressCount = 0;
let increasedThrottleCount = 0;

const throttleCount = _.throttle(() => {
  increasedCount.innerHTML = ++increasedThrottleCount;
}, 800);

increasedBtn.addEventListener("click", () => {
  increasedBtnPressed.innerHTML = ++increasedPressCount;
  throttleCount();
});

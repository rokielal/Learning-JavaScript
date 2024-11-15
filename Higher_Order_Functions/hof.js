const radius = [3, 4, 6, 9];

// function calculateRadius(radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }

// console.log("Area: ", calculateRadius(radius));

// function calculateCircumference(radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// }

// console.log("Circumferecne : ", calculateCircumference(radius));

// function calculateDiameter(radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// }

// console.log("Diamter : ", calculateDiameter(radius));

// For the above codes we are reapeating the codes to solve that we can create logic for area,circumference and diameter outSide and create a generic logic for calculate in which logic for calculation is passed as arguement.

const area = function (radius) {
  return Math.PI * radius * radius;
};

const Circumferecne = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

function calculate(radius, logic) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
}

console.log("Area: ", calculate(radius, area));
console.log("Circumference: ", calculate(radius, Circumferecne));
console.log("Diameter: ", calculate(radius, diameter));

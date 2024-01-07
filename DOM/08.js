//innerHtml

const headLine = document.querySelector('.headline');

// console.log(headLine); // it will give whole div
// console.log(headLine.innerHTML); // it will return element inside div

// we can change element by using innerHTML

headLine.innerHTML = "<h1>Inner HTML chaned </h1>";
headLine.innerHTML += "<button class = \"btn\"> Learn More </button>"

console.log("After using innerHTML", headLine);

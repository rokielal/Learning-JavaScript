// Manipulating DOM using currying

function updateText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeading = updateText("heading");
// updateHeading("I am Manoranjan");
// updateHeading("I am Developer");
updateHeading("I am Full stack Developer");

// Here we can call updateHeading any number of times and pass what we want to display in heading

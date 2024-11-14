
function generateRandomNumber() {
    return Math.floor((Math.random() * 41)- 20);
}

function displayRandomNumber() {
    let randomNumber = generateRandomNumber();

    let numElement = document.getElementById('num')

    numElement.textContent = randomNumber;
}
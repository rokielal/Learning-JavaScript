
// parseInt / parseFloat

// convert string into number

// const numberString = '23';

// const number = parseInt(numberString);  

// console.log(number);
// console.log(typeof(number));

// const numberString = '3.14';

// const number = parseFloat(numberString);  

// console.log(number);
// console.log(typeof(number));

// note => this methods will try to extract as much numeric content from
// the begining of the string

// const mixedString ='43 is the answer';

// const numberFromMixedString = parseInt(mixedString);

// console.log(numberFromMixedString); //43

const mixedString =' the 43 answer';

const numberFromMixedString = parseInt(mixedString);

console.log(numberFromMixedString); //NaN, because number is not at the begning of the string
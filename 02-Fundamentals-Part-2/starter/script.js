'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');


function logger() {
  console.log('My name is Andrew');
}

// calling / running / invoking - the function
logger();

function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const fruitJuice = foodProcessor(5, 2);
console.log(fruitJuice);

const appleOrangeJuice = foodProcessor(5, 9);
console.log(appleOrangeJuice);



// Function Declaration (has a function Name)

const age1 = calcAge1(1969);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expression (function name is omitted)

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1969);
console.log(age1, age2);


function calculateBill(billAmount, taxRate = 0.05, tipRate = 0.15) {
  console.log(billAmount, taxRate);
  // this is the function body
  console.log('Running calculate bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function call/run
const andrewTotal = 400;
const andrewTaxRate = 0.7;
//const myTotal = calculateBill(andrewTotal, andrewTaxRate);
//const myTotal2 = calculateBill(100, 0.05);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

//const greeting = sayHiTo('Andrew');
//console.log(greeting);

function doctorName(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

//console.log(yell(doctorName('Andrew')));
console.log(yell());
console.log(yell('Andrew'));



// Arrow Functions //

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

*/

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1969);
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years;`;
};

console.log(yearsUntilRetire(1991, 'Jonas'));
console.log(yearsUntilRetire(1980, 'Bob'));

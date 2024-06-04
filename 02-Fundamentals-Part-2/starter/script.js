'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');
*/

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

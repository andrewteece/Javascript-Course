// functional programming

/*
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);
*/

// First-class Functions

function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}

function specificNum() {
  return 42;
}

let useRandom = true;

let getNumber;
if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());

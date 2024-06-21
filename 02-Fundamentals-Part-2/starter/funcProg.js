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

*/

// Programming Assignment: Building a functional program

// Task 1: Build a function-based console log message generator

var message;
var style;

function consoleStyler(color, background, fontSize, txt) {
  message = '%c' + txt;
  style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  let fontStyle = `color: tomato; font-size: 50px;`;
  if (reason === 'birthday') {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason === 'champions') {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

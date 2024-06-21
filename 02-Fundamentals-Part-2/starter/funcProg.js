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

*/

// var keyword

// 1. We CAN access a var variable BEFORE initialization ....
// ... as long as the var variable si EVENTUALLY INITIALIZED
// ... ANYWHERE in our code

// console.log(user);

// 2. We CAN declare and redeclare the same var variable without errors

//var user = 'Andrea';
//var user = 'Delaney';
//var user = 'Dayton';

// console.log(user);

//var user;

// let keyword

// 1. We CANNOT access a let variable before we declare it
// console.log(user); // ERROR!
// let user;

// 2. We CAN declare an unassigned variable with let
// let user;
// console.log(user);

// 3. We CANNOT redeclare a let variable
// let user = "Andrea";

// 4. Bue we CAN re-assign it
// user = "Andrew";
// console.log(user);

// const keyword

// 1. The const keyword MUST BE INITIALIZED
// console.log(user); // ERROR!
// const user;

// 2. We CANNOT access the const variable BEFORE initialization
// console.log(user); // Unexpected token error
// const user = "Andrew"

// 3. We CANNOT redeclare a const variable
// user = "Andrea";

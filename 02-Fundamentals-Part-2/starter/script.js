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



// Functions calling other Functions

function cutFruit(fruit) {
  return fruit * 5;
}

function foodProcessor(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(foodProcessor(2, 3));



// Reviewing Functions

// with Arrow function

const yearsUntilRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetire(1978, 'Andrew'));


// without Arrow

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetire = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `Congrats ${firstName} you are retired!`;
  }
};

console.log(yearsUntilRetire(1969, 'Andrew'));
console.log(yearsUntilRetire(1979, 'Sam'));


// Function Declaration  -- Function that can be used BEFORE it is declared.

function calcAge(birthYear) {
  return 2037 - birthYear;
}

// Function Expression -- Essentially a function VALUE stored in a variable.

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function -- Great for quick one-line functions.

const calcAge = (birthYear) => 2037 - birthYear;

*/

// JS Fundamentals - Part 2 -- Coding Challenge #1

/* Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(20, 45, 50));

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

// TEST 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);



// Arrays

const friends = ['Michael', 'Thomas', 'William'];
console.log(friends);

const year = new Array(1987, 1991, 2000, 2012);
console.log(year);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Sam';
console.log(friends);

const name = ['Andrew', 'Teece', 2024 - 1969, 'web developer'];
console.log(name);
console.log(name.length);

// Exercise

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1964, 1970, 1982, 1997, 2012];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[4]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[4])];
console.log(ages);



// Array Methods

// add elements
const friends = ['Michael', 'Thomas', 'William'];
friends.push('Larry');
console.log(friends);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); //last element of the array
console.log(friends);

friends.shift(); // first element of the array
console.log(friends);

// position of element in array
console.log(friends.indexOf('Thomas'));

// check to see if element is in the array
console.log(friends.includes('Thomas'));
console.log(friends.includes('Bob'));

if (friends.includes('William')) {
  console.log('You have a friend called William');
}



const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);



// if/else & switch

let age = 55;
if (age >= 65) {
  console.log('You get your income for your pension');
} else if (age < 65 && age >= 18) {
  console.log('Each month you get a salary');
} else if (age < 18) {
  console.log('You get an allowance');
} else {
  console.log('The value of the age variable is not numerical');
}

let day = 'Sunday';
switch (day) {
  case 'Monday':
    console.log('Prepare weekly plan');
    break;
  case 'Tuesday':
    console.log('Schedule meetings');
    break;
  case 'Wednesday':
    console.log('Go to office');
    break;
  case 'Thursday':
    console.log('Dr. appointment');
    break;
  case 'Friday':
    console.log('Golf outing');
    break;
  case 'Saturday':
    console.log('Hiking and photography');
    break;
  case 'Sunday':
    console.log('Family day');
    break;
  default:
    console.log('There is no such day');
    break;
}



// Objects

const person = {
  firstName: 'Andrew',
  lastName: 'Teece',
  age: 55,
  job: 'developer',
  friends: ['William', 'Sam', 'Andrea'],
};

//console.log(person); // dot notation
//console.log(person.lastName); // dot notation
//console.log(person.job); // dot notation
//console.log(person['lastName']); // bracket notation

const nameKey = 'Name';
console.log(person['first' + nameKey]);
console.log(person['last' + nameKey]);

const interest = prompt(
  'What do you want to know about Andrew? Choose between firstName, lastName, age, job, and friends'
);
/*
if (person[interest]) {
  console.log(person[interest]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

person.location = 'Canada';
person['twitter'] = '@twitter.com';
console.log(person);
*/
// Challenge
// "Andrew has 3 friends, and his best friend is named Andrea"
/*
console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is ${person.friends[2]}`
);



// Object Methods

const person = {
  firstName: 'Andrew',
  lastName: 'Teece',
  birthYear: 1969,
  job: 'developer',
  friends: ['William', 'Sam', 'Andrea'],
  hasDriversLicense: true,

  //calcAge: function () {
  //console.log(this);
  // return 2024 - this.birthYear;
  //},
  //};

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${person.job}.`;
  },
};

//console.log(person.calcAge(person.birthYear)); // dot notation
//console.log(person['calcAge'](person.birthYear)); // bracket notation

console.log(person.calcAge());
console.log(person.age);

// Challenge
// "Andrew is a 55-year old developer"

console.log(person.getSummary());



// for loop (counting up)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('Counting completed!');

// for loop (counting down)
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log('Countdown finished');

// while loop (counting down)
let i = 5;
while (i > 0) {
  console.log(i);
  i = i - 1;
}
console.log('Countdown finished');

// while loop (counting up)
let x = 1;
while (x <= 5) {
  console.log(x);
  x++;
}
console.log('Counting completed!');

// while loop (counting up)
let y = 2018;
while (y <= 2022) {
  console.log(y);
  y++;
}
  */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`
  );
}

/*
let js = 'Amazing';

let firstName = 'Andrew';
console.log(firstName);



let country = 'United States';
let continent = 'North America';
let population = 230;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language = '';

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);



let age = 54;

age = 55;
console.log(age);



// Math Operators

const currentYear = 2024;
const ageAndrew = currentYear - 1969;
const ageAndrea = currentYear - 1972;
console.log(ageAndrew, ageAndrea);

console.log(ageAndrew * 2, ageAndrew / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Andrew';
const lastName = 'Teece';
console.log(firstName + ' ' + lastName);

// Assignment Operators

let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x); // 25

// Comparison Operators

console.log(ageAndrew > ageAndrea); // greater than
console.log(ageAndrew < ageAndrea); // less than
console.log(ageAndrea >= 18); // greater than or equal
console.log(ageAndrew <= 18); // less than or equal


const currentYear = 2024;
const ageAndrew = currentYear - 1969;
const ageAndrea = currentYear - 1972;

console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y); // 10 , 10

const averageAge = (ageAndrew + ageAndrea) / 2;
console.log(ageAndrew, ageAndrea, averageAge);


let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

let BMIMark = Math.floor(massMark / heightMark ** 2);
let BMIJohn = Math.floor(massJohn / heightJohn ** 2);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


const firstName = 'Andrew';
const job = 'Developer';
const birthYear = 1969;
const currentYear = 2024;

const whoAmI = `I'm ${firstName}, I am a ${job}, and I am ${
  currentYear - birthYear
} years old`;

console.log(whoAmI);



let age = 24;
let ageToVote = 18;

if (age >= ageToVote) {
  console.log('You are able to vote');
} else {
  console.log('You are NOT able to vote');
}

const birthYear = 1969;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = Math.floor(massMark / (heightMark * heightMark));
const BMIJohn = Math.floor(massJohn / (heightJohn * heightJohn));
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}


// type conversion

// String to Number
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// Number to String
console.log(String(24));
console.log(typeof 24);

// type coercion

console.log('I am ' + 28 + ' years old'); // string - number - string (+)
console.log('23' - '10' - 3); // string to number with  (-)
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1; // '11' string
n = n - 1; // converts to number
console.log(n); // 10



// truthy & Falsy
// 5 falsy values: 0, '', undefined, null, Nan

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Andrew')); // true
console.log(Boolean({})); // true

const money = 60;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

let height = 1.88;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


// Equality Operators

const age = 18;
if (age === 18) console.log('You just became an adult'); // strict

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);

if (favorite === 12) {
  console.log('Cool, 12 is an amazing number');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 12 or 7');
}
*/

// Boolean Logic & Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

/*console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); */

/*if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

// Challenge 3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(Math.floor(scoreDolphins), Math.floor(scoreKoalas));

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy');
}


// Bonus #1

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

console.log(Math.floor(scoreDolphins), Math.floor(scoreKoalas));

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Both win the trophy 🏆');
} else {
  console.log('No one wins the trophy');
}



// Switch Statements

const day = 'friday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}

*/

// Statements & Expressions

3 + 4; //expression
1991; //expression
true && false && !false; //expression

// The following is a statement

if (23 > 10) {
  const str = '23 is bigger';
}

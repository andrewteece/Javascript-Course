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
*/

const firstName = 'Andrew';
const job = 'Developer';
const birthYear = 1969;
const currentYear = 2024;

const whoAmI = `I'm ${firstName}, I am a ${job}, and I am ${
  currentYear - birthYear
} years old`;

console.log(whoAmI);

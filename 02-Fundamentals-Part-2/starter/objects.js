// Object Literals and Dot Notation
/*

const assistantMgr = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: 'young and ambitious',
  greeting: "Let's make some money",
};

assistantMgr.yearsOnJob = 5;

console.log(assistantMgr);

// Object Literals with Bracket Notation

let house2 = {};
house2['rooms'] = 4;
house2['color'] = 'red';
house2['priceUSD'] = 12345;
console.log(house2);

let car = {};
car.color = 'red';
car['color'] = 'green';
car['speed'] = 200;
car.speed = 100;

car['number of doors'] = 4;

console.log(car);

// Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.

let arrOfKeys = ['speed', 'altitude', 'color'];
let drone = {
  speed: 100,
  altitude: 200,
  color: 'red',
};
for (let i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}

// Arrays are Objects

let fruits = [];
fruits.push('apple');
fruits.push('pear');
fruits.push('pineapple');

console.log(fruits);

function arrayBuilder(one, two, three) {
  const arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}



// Object Methods

const car = {};
car.color = 'Red';
car.mileage = 86750;
console.log(car);

// add a method to the car object so that it can be call as car.turnKey()
car.turnKey = function () {
  console.log('The engine is running');
};
car.lightsOn = function () {
  console.log('The lights are on');
};
console.log(car);
car.turnKey();
car.lightsOn();



// De-structuring array and objects

const clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn',
};

for (const key of Object.keys(clothingItem)) {
  console.log(key, ':', clothingItem[key]);
}

function textBracketsDynamicAccess() {
  let dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = 'speed';
  } else {
    dynamicKey = 'color';
  }

  const drone = {
    speed: 15,
    color: 'orange',
  };
  console.log(drone[dynamicKey]);
}

textBracketsDynamicAccess();

// For of loops and objects

// create object
const car = {
  engine: true,
  steering: true,
  speed: 'slow',
};

const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log(`The sportsCar object: `, sportsCar);

console.log(`--- for-in is unreliable ---`);
for (prop in sportsCar) {
  console.log(prop);
}

console.log(`Iterating over object AND its prototype`);

console.log(`--- for-of is reliable ----`);
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ': ' + sportsCar[prop]);
}

console.log(`Iterating over oject's OWN PROPERTIES only1`);
console.log(sportsCar);



// Programming Assignment: Array and Object Iteration

// Task 1

const dairy = [
  'cheese',
  'sour cream',
  'milk',
  'yogurt',
  'ice cream',
  'milkshake',
];

function logDairy() {
  for (props of dairy) {
    console.log(props);
  }
}

logDairy();

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (const key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}

birdCan();

// Task 3

function animalCan() {
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();



// Data Structures

// arrays

let grades = [75, 95, 90, 85, 80, 85];

let gradesSum = 0;

for (i = 0; i < grades.length; i++) {
  gradesSum += grades[i];
}
console.log(gradesSum / grades.length);

// Working with Arrays
// forEach() method

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

// filter() method

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  console.log(num);
  return num > 20;
});



// map method

[0, 10, 20, 30, 40, 50].map(function (num) {
  console.log(num);
  return num / 10;
});

// working with Maps in JS

let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The third place');

console.log(bestBoxers);
bestBoxers.get(1);

// working with Sets in JS

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);



// spread operator

let top3 = ['The Colosseum', 'Trevi Fountain', 'THe Vatican City'];

function showItinerary(place1, place2, place3) {
  console.log(`Visit ${place1}`);
  console.log(`Then visit ${place2}`);
  console.log(`Finish with a visit to ${place3}`);
}
showItinerary(...top3);

// rest operator

let top7 = [
  'The Colosseum',
  'Trevi Fountain',
  'THe Vatican City',
  'The Roman Forum',
  'The Patheon',
  'Piazza Venezia',
  'The Palatine Hill',
];

const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(top7);

///

function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item);
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 70);
console.log(shoppingCart);

*/

// Join arrays, objects using the rest operator

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry', 'blackberry'];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar);

// add new members to arrays WITHOUT using the push() method

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// convert a string to an array using the spread operator

const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

// copy either an object or an array into a separate one

const car1 = {
  speed: 200,
  color: 'red',
};

const car2 = { ...car1 };

car1.speed = 220;

console.log(car1.speed, car2.speed);

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits.pop();
console.log(fruits1, 'not', fruits2);

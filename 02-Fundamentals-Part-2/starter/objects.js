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

*/

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

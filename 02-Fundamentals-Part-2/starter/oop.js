// Object-Oriented Programming

/*
let purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    let calculation = this.shoes * this.stateTax;
    console.log('Total price:', calculation);
  },
};
purchase1.totalPrice();

// Functional Programming

let shoes = 100;
let stateTax = 1.2;

function total(shoes, tax) {
  return shoes * tax;
}

var toPay = total(shoes, stateTax);
console.log(toPay);

// Constructors
function IceCream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIceCream = new IceCream('kiwi');
let appleIceCream = new IceCream('apple');
kiwiIceCream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIceCream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

// Creating Classes

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

let myFirstTrain = new Train('red', false);
let mySecondTrain = new Train('blue', true);
let myThirdTrain = new Train('silver', true);
let myFourthTrain = new Train('green', false);

console.log(myFirstTrain);
console.log(myThirdTrain);
console.log(myFourthTrain);

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
  }
}

let train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights();
train5.lightsStatus();

train5.getPrototype();
highSpeed1.getPrototype();

// Inheritance

const bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

const eagle1 = Object.create(bird);
console.log('eagle1: ', eagle1);

console.log('eagle1 has wings:', eagle1.hasWings);
console.log('eagle1 can fly:', eagle1.canFly);
console.log('eagle1 has feather', eagle1.hasFeathers);

const eagle2 = Object.create(bird);
console.log('eagle2 has wings:', eagle2.hasWings);

const penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('penguin1: ', penguin1);
console.log('penguin1 has feathers:', penguin1.hasFeathers);
console.log('penguin1 can fly:', penguin1.canFly);



// Designing an OO Program

class Animal {
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log('Energy is decreasing, currently at:', this.energy);
    } else if (this.energy === 0) {
      this.sleep;
    }
  }
  sleep() {
    this.energy += 20;
    console.log('Energy is increasing, currently at:', this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = 'purr',
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = 'meow',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound() {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = 'Roar!',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound() {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird('shriek', false, 'black and white', 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!



// OOP Challenge

// Task 1: Code a Person Class
class Person {
  constructor(name = 'Tom', age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task #2 : Code a Worker Class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an Intern object, run methods

function intern() {
  let intern = new Worker(
    (name = 'Bob'),
    (age = 21),
    (energy = 110),
    (xp = 0),
    (hourlyWage = 10)
  );
  intern.goToWork();
  return intern;
}

// Task 4: Code a Manager object, run methods

function manager() {
  let manager = new Worker(
    (name = 'Alice'),
    (age = 30),
    (energy = 120),
    (xp = 100),
    (hourlyWage = 30)
  );
  manager.doSomethingFun();
  return manager;
}
*/

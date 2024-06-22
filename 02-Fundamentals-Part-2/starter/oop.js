// Object-Oriented Programming

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

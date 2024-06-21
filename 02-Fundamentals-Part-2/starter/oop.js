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

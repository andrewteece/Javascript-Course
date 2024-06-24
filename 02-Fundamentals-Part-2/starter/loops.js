// for loop
/*
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('Counting completed!');
*/

//
/*
Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10


for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log('Gold Medal');
  } else if (i === 2) {
    console.log('Silver Medal');
  } else if (i === 3) {
    console.log('Bronze Medal');
  } else {
    // this block will run if not condition matches
    console.log(i);
  }
}

/*
Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.


for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;
    default:
      //this block will run if no condition matches
      console.log(i);
  }
}
  */

// for loop

// for ([initialExpression]; [conditionExpression];  [incrementExpression]) //statement ;

// INITIAL Expression: initializes a variable/counter
// CONDITION Expression: Condition that the loop wil continue to run as long as it is met or until the condition is false.
// INCREMENT Expression: Expression that will be executed after each iteration of the loop. Usually increments the variable.
// STATEMENT: Code that will be executed each time the loop is run. To execute a 'block' of code, use the '{ }' syntax.

/* for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Number ' + i);
  }
}
 

// Nested loop
for (let i = 1; i <= 5; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}



// loop through an array

const names = ['Andrew', 'Andrea', 'Dayton', 'Delaney'];

for (let i = 0; i < names.length; i++) {
  if (i === 1) {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}



// Break

for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log('Breaking...');
    break;
  }
  console.log(i);
}
   

// Continue

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13...');
    continue;
  }
  console.log(i);
}



// while loop

let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}



// loop over arrays

let i = 0;
const arr = [10, 20, 30, 40];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}


// nesting while loops

let i = 1;

while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
  

// Do While loops

let i = 21;
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);

  

// for loops keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}



// Nested loop

for (let i = 1; i <= 2; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}



// Looping arrays, break & continue

const person = [
  'Andrew',
  'Teece',
  2024 - 1969,
  'developer',
  ['Andrea', 'Dayton', 'Delaney'],
  true,
];

const types = [];

for (let i = 0; i < person.length; i++) {
  // Reading from person array
  console.log(person[i], typeof person[i]);

  // Filling types array
  //types[i] = typeof person[i];

  types.push(typeof person[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break

console.log('--- ONLY STRINGS ---');
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] !== 'string') continue;
  console.log(person[i], typeof person[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] === 'number') break;
  console.log(person[i], typeof person[i]);
}



// Loop backwards

const person = [
  'Andrew',
  'Teece',
  2024 - 1969,
  'developer',
  ['Andrea', 'Dayton', 'Delaney'],
  true,
];

for (let i = person.length - 1; i >= 0; i--) {
  console.log(i, person[i]);
}



// Loops in loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- starting exercise ${exercise} ---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} `);
  }
}



// while loop

// for loop for comparison to while loop

//or (let rep = 1; rep <= 10; rep++) {
//console.log(`Lifting weights repetition ${rep}`);
//}

// now the while loop

let rep = 1; // counter
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}



let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop has to end when a 6 is rolled`);
  }
}
  */

// Challenge #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

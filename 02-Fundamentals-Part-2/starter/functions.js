// Arrays

//const train1 = ['wheat', 'barley', 'salt', 'sugar', 'potato'];
//const train2 = ['coal', 'ore'];

// Building and calling functions

/*
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
listArrayItems(colors);



//Exercise: Practicing with functions

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}

letterFinder('text', 't');



// Array to String

const users = [
  {
    id: 1,
    name: 'Sam Doe',
  },
  {
    id: 2,
    name: 'John Doe',
  },
];

const usersNameArray = users.map((user) => user.name);
console.log(usersNameArray);

const csv = usersNameArray.join(', ');
console.log(csv);

const html = `<ul>
	${users.map((user) => `<li>${user.name}</li>`).join('')}
</ul>`;
console.log(html);



// Array are iterable

let veggies = ['Onion', 'Parsley', 'Carrots'];
console.log(veggies.length);

//console.log(veggies[0]);
//console.log(veggies[2]);

for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

// Strings are iterable , too!!

const greeting = 'Howdy';

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

*/
// Exercise: Creating arrays and objects
/*
Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.
*/

const clothes = [];
clothes.push('tank-top');
clothes.push('swimsuit');
clothes.push('raincoat');
clothes.push('beach pants');
clothes.push('beach shirt');

clothes.pop();
clothes.push('dress shirt');
console.log(clothes);
console.log(clothes[2]);

const favCar = {};
favCar.color = 'red';
favCar.convertible = true;

console.log(favCar);

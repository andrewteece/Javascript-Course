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

*/

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

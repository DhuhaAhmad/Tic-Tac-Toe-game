# Project1-Tic-Tac-Toe

Tic Tac Toe it's a game in which two players alternately put X's and O's on a game board formed by two vertical lines crossed by two horizontal lines, And each player must fill adjacent three cells (vertical, horizontal, or diagonal) before the other to be able to win

## Built with

- HTML
- CSS
- JAVASCRIPT

## technologies used

- VScode
- Git Bash
- Chrome

## User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

## WireFrame

## Determine the winner

Stored the win cells in 2 dimensional array

```
const Sequence = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

```

And the chosen cells for each player will be stored on their own array

```
const playerOne = [];
const playerTwo = [];

```

each time one of the players click a cell the index of that cell will be added to the player's array

```
playerOne.push(parseInt(current.id));

```

```
playerTwo.push(parseInt(current.id));

```
This function will accept an array for the player, iterating through Sequence array and take each array inside then iterating through it, while checking each element  if it's existing in the player array will return true

```
const isSeq = function (player) {
  for (let i = 0; i < Sequence.length; i++) {
    let cells = 0;
    for (let j = 0; j < Sequence[i].length; j++) {
      if (player.includes(Sequence[i][j])) {
        cells++;
        if (cells === 3) {
          return true;
        }
      }
    }
  }
  return false;
};

```

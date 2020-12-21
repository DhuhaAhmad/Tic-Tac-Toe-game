//squers used for each player
const playerOne = [];
const playerTwo = [];
let alternate = true;
let gameOver = false;
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

//get a board
const board = document.querySelector("#board");
//get restart button
const restart = document.querySelector("#restart");
//Seclect spicific squer by its id
board.addEventListener("click", function () {
  //to stop the game if one win or tie
  if (!gameOver) {
    current = event.target;
    //to alternate between x and o
    //x turn
    if (alternate) {
      if (isOccupied(parseInt(current.id))) {
        current.innerText = "X"; //X
        current.style.backgroundColor = "coral"; //X
        playerOne.push(parseInt(current.id));
        if (playerOne.length >= 3) {
          if (isSeq(playerOne)) {
            alert("X WINS!!");
            gameOver = true;
          }
        }
        alternate = false;
      }
    }
    if (!alternate) {
      //o turn
      if (isOccupied(parseInt(current.id))) {
        current.innerText = "O"; //X
        current.style.backgroundColor = "rgb(129, 212, 129)"; //X
        playerTwo.push(parseInt(current.id));
        if (playerTwo.length >= 3) {
          if (isSeq(playerTwo)) {
            alert("O WINS!!");
            gameOver = true;
          }
        }
        alternate = true;
      }
    }
  }
  //if game finshed and all cells not sequenced
  //tie
  if(!gameOver && playerOne.length >= 4 && playerTwo.length >= 4 && 
    isSeq(playerOne) === false && isSeq(playerTwo) === false){
    alert('Tie!!')
}

}); // end board event listner
//check if the squer is already chosen
const isOccupied = function (squer_id) {
  if (playerOne.includes(squer_id) || playerTwo.includes(squer_id)) {
    return false;
  }
  return true;
};

//restert event listner
restart.addEventListener('click', function(){
  location.reload()

})

//check who win
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

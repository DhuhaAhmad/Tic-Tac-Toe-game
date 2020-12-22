//squers used for each player
const playerOne = [];
const playerTwo = [];
let alternate = true;
let gameOver = false;
const Sequence = [
  [0, 1, 2], //x=0,y=0
  [3, 4, 5], //x=0,y=1
  [6, 7, 8], //x=0,y=2
  [0, 3, 6], //x=1,y=0
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// winSound = new sound('exito.mp3')
//get a board
const board = document.querySelector("#board");
const all = board.querySelectorAll('div.squer')
//get restart button
const restart = document.querySelector("#restart");
const showWinner = document.querySelector('#show-winner')
const showTurn = document.querySelector('#show-turn')

//Seclect spicific squer by its id
board.addEventListener("click", function () {
  const img = document.createElement('img')
  //to stop the game if one win or tie
  if (!gameOver) {
    current = event.target;
    //to alternate between x and o
    //x turn
    if (alternate) {
      if (isOccupied(parseInt(current.id))) {
        img.src='x.png'
        img.setAttribute('id','image')
        current.appendChild(img)
        showTurn.innerText='O turn'
        playerOne.push(parseInt(current.id));
        if (playerOne.length >= 3) {
          if (isSeq(playerOne)) {
            showWinner.innerText = 'X WINS!!'
            showTurn.remove()
            gameOver = true;
          }
        }
        alternate = false;
      }
    }
    if (!alternate) {
      //o turn
      if (isOccupied(parseInt(current.id))) {
        img.src='o.png'
        img.setAttribute('id','image')
        current.appendChild(img)
        showTurn.innerText='X turn'
        // current.style.backgroundColor = 'rgb(237, 181, 78)' 
        playerTwo.push(parseInt(current.id));
        if (playerTwo.length >= 3) {
          if (isSeq(playerTwo)) {
            showWinner.innerText = 'O WINS!!'
            showTurn.remove()
            gameOver = true;
            
          }
        }
        alternate = true;
      }
    }
  }
  //if game finshed and all cells not sequenced
  //tie
  if(!gameOver && playerOne.length >= 5 && playerTwo.length >= 4 && 
    isSeq(playerOne) === false && isSeq(playerTwo) === false){
      showWinner.innerText = 'Tie!!'
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
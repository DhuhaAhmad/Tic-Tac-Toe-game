//board squers
// const squers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//squers used for each player
const playerOne = [];
const playerTwo = [];
let alternate = true;
let gameOver = true;
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


//get a board
const board = document.querySelector("#board");
//get restart button
const restart = document.querySelector("#restart");


//Seclect spicific squer by its id
board.addEventListener("click", function () {
  if(gameOver){
  current = event.target;
  //to alternate between x and o
  //x turn
  if (alternate) {
    if (isOccupied(parseInt(current.id))) {
      current.innerText = "X"; //X
      current.style.backgroundColor = "coral"; //X
      playerOne.push(parseInt(current.id));
      if(playerOne.length >= 3){
        if(isSeq(playerOne)){
          alert('X WINS!!')
          gameOver=false
        }
      }
      alternate = false;
    }
  } else {
    //o turn 
    if (isOccupied(parseInt(current.id))) {
      current.innerText = "O"; //X
      current.style.backgroundColor = "rgb(129, 212, 129)"; //X
      playerTwo.push(parseInt(current.id));
      if(playerTwo.length >= 3){
        if(isSeq(playerTwo)){
          alert('O WINS!!')
          gameOver = false
        }
      }
      alternate = true;
    }
  }
  }
});


//check if the squer is already chosen
const isOccupied = function (squer_id) {
  if (playerOne.includes(squer_id) || playerTwo.includes(squer_id)) {
    return false;
  }
  return true;
};

// restart.addEventListener('click', function(){
//     const s = document.querySelectorAll('.squer')
//     for(let i =0; i<s.length; i++){
//     s[i].setAttribute('class','reset')
//     }

// })

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
  return false
};
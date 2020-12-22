//squers used for each player
const playerOne = [];
const playerTwo = [];
let alternate = true;
let gameOver = false;
let playerOne_score=0
let playerTwo_score=0
let round=0
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

const winSound = document.querySelector('#win-sound');
const tieSound = document.querySelector('#tie-sound');
const xoSound = document.querySelector('#xo-sound');
//get a board
const board = document.querySelector("#board");
const all = board.querySelectorAll('div.squer')
//get restart button
const restart = document.querySelector("#restart");
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
      // console.log(current.id)
      if (isOccupied(parseInt(current.id))) {
        console.log('here x')
        console.log(current.id)
        xoSound.play()
        img.src='x.png'
        img.setAttribute('class','image')
        current.appendChild(img)
        showTurn.innerText='O turn'
        playerOne.push(parseInt(current.id));
        if (playerOne.length >= 3) {
          if (isSeq(playerOne)) {
            showTurn.innerText = 'X WINS!!'
            document.body.setAttribute('id','win-background')
            winSound.play()
            gameOver = true;
          }
        }
        alternate = false;
      }
    }
    if (alternate === false) {
      //o turn
      if (isOccupied(parseInt(current.id))) {
        console.log('here o')
        console.log(current.id)
        xoSound.play()
        img.src='o.png'
        img.setAttribute('class','image')
        current.appendChild(img)
        showTurn.innerText='X turn'
        playerTwo.push(parseInt(current.id));
        if (playerTwo.length >= 3) {
          if (isSeq(playerTwo)) {
            showTurn.innerText = 'O WINS!!'
           document.body.setAttribute('id','win-background')
            winSound.play()
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
      showTurn.innerText = 'Tie!!'
      document.body.setAttribute('id','tie-background')
      tieSound.play()
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
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

const winSound = document.querySelector('#win-sound');
const tieSound = document.querySelector('#tie-sound');
const xoSound = document.querySelector('#xo-sound');
//get a board
const board = document.querySelector("#board");
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
      play(false,current,playerOne,'./images/White X.png',img,'O turn','X WINS!!')
    }

    if (alternate === false) {
      console.log('OOOOOOOOOOOOOOOOOOOOO')
      play(true,current,playerTwo,'./images/Grey O.png',img,'X turn','O WINS!!')
    }
  }
  //if game finshed and all cells not sequenced
  //tie
  if(!gameOver && playerOne.length >= 5 && playerTwo.length >= 4 && 
    isSeq(playerOne) === false && isSeq(playerTwo) === false){
      showTurn.innerText = 'Tie!!' //make it beeter
      document.body.setAttribute('id','tie-background')
      tieSound.play()
}

}); // end board event listner

const play = function (alternateVal,current,player,imgSrc,img,turn,win){
    if (isOccupied(parseInt(current.id))) {
      xoSound.play()
      img.src=imgSrc
      console.log(imgSrc)
      img.setAttribute('class','image')
      current.appendChild(img)
      showTurn.innerText=turn
      player.push(parseInt(current.id));
      if (player.length >= 3) {
        if (isSeq(player)) {
          showTurn.innerText = win //make it better
          document.body.setAttribute('id','win-background')
          winSound.play()
          gameOver = true;
        }
      }
      alternate = alternateVal;
      // return
    }
}

//check if the squer is already chosen
const isOccupied = function (squer_id) {
  if(playerOne.includes(squer_id) || playerTwo.includes(squer_id) || isNaN(squer_id)) {
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
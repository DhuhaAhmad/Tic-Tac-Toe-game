//board squers
// const squers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//squers used for each player
const x = [];
const o = [];
const Sequence  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let alternate = true;

//get a board 
const board = document.querySelector("#board");
//get restart button
const restart = document.querySelector("#restart");

//Seclect spicific squer by its id
board.addEventListener("click", function () {
  current = event.target;
  //to alternate between x and o
  if (alternate) {
    if (isOccupied(parseInt(current.id))) {
        current.innerText = 'X' //X
        current.style.backgroundColor = 'coral' //X
      x.push(parseInt(current.id));
      alternate = false;
    }
  } else {
    if (isOccupied(parseInt(current.id))) {
        current.innerText = 'O'  //X
        current.style.backgroundColor = 'rgb(129, 212, 129)' //X
      o.push(parseInt(current.id));
      alternate = true;
    }
  }

  console.log(current);
});

//to convert string to number => parseInt()

//check if the squer is already chosen
const isOccupied = function (squer_id) {
  if (x.includes(squer_id) || o.includes(squer_id)) {
    return false;
  }
  return true;
};
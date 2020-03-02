let board = [];

function play(clickedId) {
  // let tic = document.getElementsByClassName('row');
  // let userInput = tic.value;
  let playerSpan = document.getElementById("player");
  let clickedElement = document.getElementById(clickedId);
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  let topLeft = board[0];
  let topMiddle = board[1];
  let topRight = board[2];
  let middleLeft = board[3];
  let middleMiddle = board[4];
  let middleRight = board[5];
  let bottomLeft = board[6];
  let bottomMiddle = board[7];
  let bottomRight = board[8];

  if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight ){
      alert(`${topLeft} winner`)
      window.location.href = ''
      return;
  
}
if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
  alert(`${middleLeft} is the winner`);
  window.location.href = ''
  return;
}
if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
  alert(`${bottomLeft} is the winner`);
  window.location.href = ''
  return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
  alert(`${topLeft} is the winner`);
  window.location.href = ''
  return;
}
if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
  alert(`${topMiddle} is the winner`);
  window.location.href = ''
  return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
  alert(`${topRight} is the winner`);
  window.location.href = ''
  return;
}
if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
  alert(`${topLeft} is the winner`);
  window.location.href = ''
  return;
}
if (bottomLeft !== undefined && bottomLeft === middleMiddle && bottomLeft === topRight) {
  alert(`${bottomLeft} is the winner`);
  window.location.href = ''
  return;
}
}

  let boardFull = true;
  
  for(let i = 0; i < 7; i++){
      if(board[i] === undefined ){
        boardFull = false;
      }
  }
  if(boardFull === true){
      alert('Cat Scratch!')
      window.location.href = ''
    }

function reset(){
    window.location.href = ''
}
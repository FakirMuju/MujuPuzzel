let Gametile = document.querySelectorAll('.tile');
let gameBoard = document.querySelector('.board');
let GameState = [
  [Gametile[0],
  Gametile[1],
  Gametile[2]],
  [Gametile[3],
  Gametile[4],
  Gametile[5]],
  [Gametile[6],
  Gametile[7],
  Gametile[8]]

  ]

function render(gameBoard, GameState) {
  GameState.forEach((row) => {
    row.forEach((column) => {
      gameBoard.appendChild(column);
    })
  })
}
gameBoard.addEventListener('touchstart', (e) => {
  let tar = e.target;

  let x, y;

  // forEcahloop
  GameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column == tar) {
        x = rowIndex;
        y = columnIndex
      }
    });
  });

  let eX, eY;

  GameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.innerText == "") {
        eX = rowIndex;
        eY = columnIndex

      }

    })
  })
  //condition for Muvement
  if (y == eY && (x + 1 == eX || x - 1 == eX) || x == eX && (y + 1 == eY || y - 1 == eY))
  {

    let temp = GameState[x][y];
    GameState[x][y] = GameState[eX][eY]
    GameState[eX][eY] = temp;
    console.log(GameState)
    render(gameBoard, GameState)

  }




});
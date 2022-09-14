// ********************** TEST *********************
const testElem = document.querySelector("#board");
console.log(testElem);

// Stage 1 - Game State and Rendering To The Document
// ***************** STATE **************************
// create an initial state
const state = {};

// build initial state which is going to populate our board
// For tic-tac-toe we want our board to be a 3 X 3 grid
// create a function buildInitialState this will populate our board
function buildInitialState() {
  state.board = [
    ["null", "null", "null"],
    ["null", "null", "null"],
    ["null", "null", "null"],
  ];
}
// **************** DOM SELECTORS ****************************
const boardElem = document.querySelector("#board");
// ********************** DOM MANIPULATION SECTION ***********
// renderBoard function this will display board on the screen
// Loop over our board property and create cells for our board
function renderBoard() {
  for (let yCoor = 0; yCoor < state.board.length; yCoor++) {
    const row = state.board[yCoor];
    for (let xCoor = 0; xCoor < row.length; xCoor++) {
      const column = row[xCoor];
      const cellElem = document.createElement("div");
      // create a class for our cell
      cellElem.classList.add("cell");
      // store the value at that sell from our board
      cellElem.innerText = state.board[yCoor][xCoor];
      // store the coordinates as a dataset for reference for later
      cellElem.dataset.coordinates = `${yCoor}, ${xCoor}`;
      // add the cellElem to our board
      boardElem.appendChild(cellElem);
    }
  }
}

// *************** BOOTSTRAPPING *************************
buildInitialState();
renderBoard();

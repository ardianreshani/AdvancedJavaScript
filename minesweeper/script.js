import { createBoard } from "./minesweeper";
const BOARD_SIZE = 2;
const NUMBER_OF_MINES = 2;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector(".board");
console.log(board);
board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
  });
});

boardElement.style.setProperty("--size", BOARD_SIZE);

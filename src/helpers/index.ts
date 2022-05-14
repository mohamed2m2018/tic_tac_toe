import {CellType, Row, Board} from './../types';

const checkWin = (board: Board) => {
  const horizontalWin = checkHorizontally(board);
  const VerticalWin = checkVertically(board);
  const DiagonalWin = checkDiagonals(board);
  return horizontalWin || VerticalWin || DiagonalWin;
};

const checkEquality = (values: CellType[]) => {
  const rowNotEmpty = values?.[0] !== undefined;
  const allValuesAreEqual = new Set(values).size === 1;
  return allValuesAreEqual && rowNotEmpty ? values?.[0] : '';
};

const checkHorizontally = (board: Board) => {
  let win = '';
  board.forEach((row: Row) => {
    if (!win) {
      win = checkEquality(row);
    }
  });
  return win;
};

const checkVertically = (board: Board) => {
  let win = '';
  board.forEach((entry, index: number) => {
    const column = board.map((row: Row) => row[index]);
    if (!win) {
      win = checkEquality(column);
    }
  });
  return win;
};

const checkDiagonals = (board: Board) => {
  const size = board?.length;
  const flatBoard = Array.prototype.concat.apply([], board);
  const firstDiagonal = [];
  const secondDiagonal = [];

  for (let i = 0; i < size; i++) {
    const firstDiagonalPattern = i + size * i;
    const secondDiagonalPattern = size - 1 + (size - 1) * i;
    firstDiagonal?.push(flatBoard[firstDiagonalPattern]);
    secondDiagonal?.push(flatBoard[secondDiagonalPattern]);
  }
  return checkEquality(firstDiagonal) || checkEquality(secondDiagonal);
};

export default checkWin;

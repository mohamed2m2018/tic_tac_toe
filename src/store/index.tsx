import create from 'zustand';
import {Board, CellType} from '../types';

const size = 3;

const createBoard = () => {
  const firstDimension = new Array(size);
  const createSecondDimension = () => new Array(size);
  const TwoDimensionalBoard: Board = Array.from(
    firstDimension,
    createSecondDimension,
  );
  return TwoDimensionalBoard;
};

interface boardState {
  board: Board;
  setBoard: (board: Board) => void;
  latestValue: string;
  setLatestValue: (latestValue: CellType) => void;
  deleteEverything: () => void;
  winner: string;
  setWinner: (winner: string) => void;
}

const useBoardStore = create<boardState>(set => ({
  board: createBoard(),
  setBoard: (board: Board) => set({board}),
  latestValue: '',
  setLatestValue: (latestValue: string) => set({latestValue}),
  winner: '',
  setWinner: (winner: string) => set({winner}),
  deleteEverything: () =>
    set({board: createBoard(), latestValue: '', winner: ''}, false),
}));

export default useBoardStore;

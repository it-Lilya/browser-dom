import { GameBoard } from '../app';

test('Тест игры', () => {
  const newBoard = new GameBoard(4);
  expect(newBoard.boardSize).toEqual(16);
});

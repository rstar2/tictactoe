import { TileState } from '../../model';
import { GameState } from '../state/game';
import { gameReducer } from './game';
import { GameActions } from '../actions';

describe('GameReducer', () => {
  let state: GameState;

  beforeEach(() => {
    state = {
      currentGame: undefined
    };
  });

  it('uses an initial state when none is given', () => {
    let reducer = gameReducer(3, 3);
    let result = reducer(undefined, { type: 'SOME ACTION' });

    result.currentGame.tiles.forEach((arr) => {
      arr.forEach(tile => expect(tile.state).toBe(TileState.Empty));
    });
  });
});

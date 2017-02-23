import { TileState } from '../../model';
import { GameState } from '../state/game';
import { gameStateReducer } from './game';
import { GameActions } from '../actions';

describe('GameReducer', () => {
  let state: GameState;

  beforeEach(() => {
    state = {
      game: undefined,
      isMyTurn: false
    };
  });

  it('uses an initial state when none is given', () => {
    let reducer = gameStateReducer(3, 3);
    let result = reducer(undefined, {type: 'SOME ACTION'});

    result.game.tiles.forEach((tile, index) => expect(tile.state).toBe(TileState.Empty));
  });
});

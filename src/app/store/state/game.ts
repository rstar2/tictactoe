/**
 * Created by rumen on 2/13/2017.
 */

import { Game, initialGame } from '../../model/game';

export interface GameState {
  game: Game;
  isMyTurn: boolean
}

export function initialGameState(len1, len2): GameState {
  return {
    game: initialGame(len1, len2),
    isMyTurn: false
  };
}

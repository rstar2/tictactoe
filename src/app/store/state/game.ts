/**
 * Created by rumen on 2/13/2017.
 */

import { Game, createEmpty } from "../../model/game";

export interface GameState {
  currentGame: Game;
}

export function initialGameState(len1, len2): GameState {
  return {
    currentGame: {
      tiles: createEmpty(len1, len2)
    }
  }
}

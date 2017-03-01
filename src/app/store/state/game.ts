/**
 * Created by rumen on 2/13/2017.
 */

import { TileState, Opponent, Game, initialGame } from '../../model';

export interface GameState {
  game: Game;
  opponent: Opponent;
  isMyTurn: boolean;
  myTileState: TileState;
  opponentTileState: TileState;
}

export function initialGameState(len1, len2): GameState {
  return {
    game: initialGame(len1, len2),
    opponent: null,
    isMyTurn: true,
    myTileState: TileState.Ex1,
    opponentTileState: TileState.Zero0
  };
}

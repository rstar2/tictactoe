/**
 * Created by rumen on 2/13/2017.
 */

import { Game, GameResult, initialGame, Opponent, TileState } from '../../model';

export interface GameState {
  game: Game;
  opponent: Opponent;
  result: GameResult;
  isMyTurn: boolean;
  myTileState: TileState;
  opponentTileState: TileState;
}

/**
 * Create a partial GameState object depending ont hthe passed boolean param,
 * meaning who's the "owner" of the game
 * @param isMyGame who stared the game, so in fact whose turn will be first
 */
export function startGame(isMyGame: boolean) {
  return {
    isMyTurn: isMyGame,
    myTileState: isMyGame ? TileState.Ex1 : TileState.Zero0,
    opponentTileState: isMyGame ? TileState.Zero0 : TileState.Ex1
  };
};

export function initialGameState(len1: number, len2: number, isMyGame: boolean): GameState {
  let state = {
    game: initialGame(len1, len2),
    opponent: null,
    result: GameResult.NotEnded
  };
  return Object.assign(state, startGame(isMyGame));
}



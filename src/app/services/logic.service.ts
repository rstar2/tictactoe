import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/state';
import { getState, getMyTileState } from '../store/reducers';
import { Matrix, Tile, TileState, GameResult } from '../model';

@Injectable()
export class LogicService {

  constructor(private store: Store<AppState>) { }


  /**
   * @returns valid game result
   */
  checkGame(tiles: Matrix<Tile>): GameResult {
    let ticTacToeState: TileState = null;
    let hasEmpty = false;

    tiles.forEachTicTacToe((group: Tile[]) => {
      let isEnded = true;
      for (let i = 0, len = group.length; i < len; i++) {
        let tile = group[i];
        if (i === 0) {
          ticTacToeState = tile.state;
        }

        if (tile.state === TileState.Empty) {
          hasEmpty = true;
          ticTacToeState = null;
          isEnded = false;
          break;
        } else if (null !== ticTacToeState && tile.state !== ticTacToeState) {
          ticTacToeState = null;
          isEnded = false;
        }
      }
      return isEnded;
    });

    let result;
    if (null === ticTacToeState) {
      result = hasEmpty ? GameResult.NotEnded : GameResult.Draw;
    } else {
      // for sure ticTacToeState is either TileState.Zero0 or TileState.Ex1
      let appState: AppState = getState(this.store);
      let myTileState = getMyTileState(appState);
      if (myTileState === ticTacToeState) {
        result = GameResult.Win;
      } else {
        result = GameResult.Loss;
      }
    }

    return result;
  }

}

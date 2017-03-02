import { Injectable } from '@angular/core';

import { Matrix, Tile, TileState, GameResult } from '../model';

@Injectable()
export class LogicService {


  /**
   * @returns valid game result
   */
  checkGame(tiles: Matrix<Tile>): GameResult {
    let result = GameResult.NotEnded;
    let count = 0;

    tiles.forEach(tile => {
      if (tile.state !== TileState.Empty)
        count++;

      if (count == 3) {
        result = GameResult.Win;
        return true;
      }
      return false;
    });
    return result;
  }

}

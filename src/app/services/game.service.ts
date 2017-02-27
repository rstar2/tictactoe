import { Observable } from 'rxjs/Rx';

import { Tile, TileState, GameResult } from '../model';

import { OpaqueToken } from '@angular/core';

export const GAME_SERVICE = new OpaqueToken('game.service');

export interface GameService {

  // testing
  getTitle(): Observable<string>;

  startGame(oponentUid: string, isMyTurn: boolean): Promise<any>;

  finishGame(result: GameResult): Promise<any>;

  updateTile(tile: Tile, tileState: TileState): Promise<any>;
  

}

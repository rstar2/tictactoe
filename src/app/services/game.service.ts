import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Tile, TileState } from '../model';

import { OpaqueToken } from '@angular/core';

export const GAME_SERVICE = new OpaqueToken('game.service');

export interface GameService {

  // test
  getTitle(): Observable<string>;

  updateTile(tile: Tile, tileState: TileState): Promise<any>;

}

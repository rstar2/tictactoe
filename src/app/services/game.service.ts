import { Injectable, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppState } from '../store/state';
import { Tile, TileState, GameResult } from '../model';

export const GAME_SERVICE = new OpaqueToken('game.service');

@Injectable()
export abstract class GameService {

  constructor(protected store: Store<AppState>) {
  }

  abstract getTitle(): Observable<string>;

  requestPlayWith(opponentUID: string): void {

  }

  leavePlay(): void {

  }

  startNewGame(): void {

  }

  updateTile(tile: Tile): void {
  }

}

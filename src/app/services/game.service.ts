import { Injectable } from '@angular/core';

import { Tile } from '../model';

@Injectable()
export abstract class GameService {

  constructor(protected opponentUid: string) {
  }

  requestPlay(): void {

  }

  leavePlay(): void {

  }

  startNewGame(): void {

  }

  updateTile(tile: Tile): void {
  }

}

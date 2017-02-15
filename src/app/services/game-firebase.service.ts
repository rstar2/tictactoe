import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Tile, TileState } from '../model';

import { GameService } from './game.service';

@Injectable()
export class GameFirebaseService implements GameService {
  constructor(private af: AngularFire) { }

  updateTile(tile: Tile, tileState: TileState): Observable<Tile> {
    return null;
  }
}

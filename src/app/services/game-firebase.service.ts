import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/share';

import { GameService } from './game.service';

import { Tile, TileState } from '../model';

@Injectable()
export class GameFirebaseService implements GameService {
  constructor(private af: AngularFire) { }

  getTitle(): Observable<string> {
    return this.af.database.object('/title').map(snap => {
      // the snapshot in AngularFire2 has two properties snap.$key and snap.$value
      return snap.$value;
    }).share();
  }

  updateTile(tile: Tile, tileState: TileState): Promise<any> {
    return null;
  }
}

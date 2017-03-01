import { Injectable, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/share';

import { GameService } from './game.service';
import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { Tile, TileState } from '../model';

@Injectable()
export class GameFirebaseService extends GameService implements OnInit {

  constructor(opponentUid: string, private store: Store<AppState>, private af: AngularFire) {
    super(opponentUid);
  }

  ngOnInit(): void {
    // listen to changes on a tile
    // this.af.database.object('/game').map(snap => {
    //   // the snapshot in AngularFire2 has two properties snap.$key and snap.$value
    //   return snap.$value;
    // }).subscribe(tile => new GameActions.TileUpdateSuccessAction(tile));
  }

  updateTile(tile: Tile) {
    // for testing - in real life it should send update to Firebase
    this.store.dispatch(new GameActions.TileUpdateSuccessAction(tile));
  }
}

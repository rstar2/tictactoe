import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GameService } from './game.service';
import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { Tile } from '../model';

@Injectable()
export class GameComputerService extends GameService implements OnInit {

  constructor(opponentUid: string, private store: Store<AppState>) {
    super(opponentUid);
  }

  ngOnInit(): void {
  }

  updateTile(tile: Tile) {
    // for testing - in real life it should send update to Firebase
    this.store.dispatch(new GameActions.TileUpdateSuccessAction(tile));
  }

}

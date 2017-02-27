import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/share';

import { GameService } from './game.service';
import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { Tile, TileState } from '../model';

@Injectable()
export class GameComputerService extends GameService implements OnInit {

  constructor(store: Store<AppState>) {
    super(store);
  }

  ngOnInit(): void {
  }

  getTitle(): Observable<string> {
    return Observable.of('Playing with computer');
  }

  updateTile(tile: Tile) {
    // for testing - in real life it should send update to Firebase
    this.store.dispatch(new GameActions.TileUpdateSuccessAction(tile));
  }

}

import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { Matrix, Tile, TileState, GameResult } from '../model';
import { AppState } from '../store/state';
import { getGame } from '../store/reducers';

@Injectable()
export class LogicService implements OnInit {

  gameResult$: Observable<GameResult>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // use the store (and listen to changes from it)
    this.gameResult$ = this.store.select(getGame)
      .delay(100)
      .map(game => this.checkGame(game.tiles))
      .filter(result => result !== GameResult.NotEnded);
  }

  /**
  *  @returns valid game result
  */
  private checkGame(tiles: Matrix<Tile>): GameResult {



    return null;
  }

}

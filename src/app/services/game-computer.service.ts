import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GameService } from './game.service';
import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { getState, getGame, getOpponentTileState, getResult } from '../store/reducers';
import { Tile, TileState, IndexPair, Matrix, GameResult } from '../model';

@Injectable()
export class GameComputerService extends GameService implements OnInit {

  constructor(opponentUid: string, private store: Store<AppState>) {
    super(opponentUid);
  }

  ngOnInit(): void {
  }

  updateTile(tile: Tile) {
    this.store.dispatch(new GameActions.TileUpdateSuccessAction(tile));

    let appState: AppState = getState(this.store);
    if (getResult(appState) === GameResult.NotEnded) {
      // simulate computer's turn after some timeout
      setTimeout(() => {
        let oppTile = this.chooseRandomTile(appState);
        this.store.dispatch(new GameActions.TileUpdateSuccessAction(oppTile));
      }, 2000);
    }
  }

  chooseRandomTile(appState: AppState): Tile {
    let tiles: Matrix<Tile> = getGame(appState).tiles;
    let oppTileState = getOpponentTileState(appState);

    let tileRandom = tiles.getRandom((tile: Tile) => tile.state === TileState.Empty);

    return Object.assign({}, tileRandom, { state: oppTileState });
  }
}

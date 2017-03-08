import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { AppState } from '../store/state';
import { getState, getGame, getOpponentTileState } from '../store/reducers';
import { GameActions } from '../store/actions';
import { Tile, TileState, GameResult } from '../model';
import { FactoryGameService, LogicService } from '../services';

@Injectable()
export class GameEffects {

  constructor(private update$: Actions,
    private store: Store<AppState>,
    private factoryGameService: FactoryGameService,
    private logicService: LogicService) {
  }

  /**
   * Filter all actions while there's no yet GameService created
   */
  private checkGameService(ensureExist = true): boolean {
    if (ensureExist) {
      // the GameService has to exist
      if (!this.factoryGameService.hasGameService()) {
        console.warn('No GameService created yet');
        return false;
      }
    } else {
      // the GameService has to NOT exist
      if (this.factoryGameService.hasGameService()) {
        console.warn('GameService created already');
        return false;
      }
    }
    return true;
  }

  @Effect({ dispatch: false })
  gameStartUpdate$ = this.update$
    .ofType(GameActions.OPPONENT_UPDATE)
    .filter(() => this.checkGameService(false))
    .map(action => action.payload)
    .map(payload => payload.opponent)
    .do(opponent => this.factoryGameService.startGame(opponent.uid));


  @Effect()
  checkGameResult$ = this.store.select(getGame)
    .map(game => this.logicService.checkGame(game.tiles))
    .map(result => new GameActions.GameEndAction(result));


  @Effect({ dispatch: false })
  tileUpdate$ = this.update$
    .ofType(GameActions.TILE_UPDATE)
    .filter(() => this.checkGameService())
    .do(() => this.store.dispatch(new GameActions.MyTurnUpdateAction(false)))
    .map(action => action.payload)
    .do(tile => this.factoryGameService.getGameService().updateTile(tile));

  @Effect()
  tileUpdateSuccess$ = this.update$
    .ofType(GameActions.TILE_UPDATE_SUCCESS)
    .filter(() => this.checkGameService())
    .map(action => action.payload)
    // filter out my turn success  and wait for opponent's turn success update
    .filter((tile: Tile) => tile.state === getOpponentTileState(getState(this.store)))
    .map(() => new GameActions.MyTurnUpdateAction(true));


}

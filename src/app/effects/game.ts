import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { FactoryGameService } from '../services';

@Injectable()
export class GameEffects {

  constructor(private update$: Actions,
    private store: Store<AppState>,
    private factoryGameService: FactoryGameService) {
  }

  /**
   * Filter all actions while there's no yet GameService created
   */
  private checkNoGameService(): boolean {
    if (!this.factoryGameService.hasGameService()) {
      console.warn('No GameService created yet');
      return false;
    }
    return true;
  }

  @Effect({ dispatch: false })
  tileUpdate$ = this.update$
    .ofType(GameActions.TILE_UPDATE)
    .filter(() => this.checkNoGameService())
    .do(() => this.store.dispatch(new GameActions.MyTurnUpdateAction(false)))
    .map(action => action.payload)
    .do(tile => this.factoryGameService.getGameService().updateTile(tile));

  // just for testing
  @Effect({ dispatch: false })
  myTurnUpdate$ = this.update$
    .ofType(GameActions.TILE_UPDATE_SUCCESS)
    .filter(() => this.checkNoGameService())
    .delay(3000)
    .do(() => this.store.dispatch(new GameActions.MyTurnUpdateAction(true)));

}

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { GAME_SERVICE, GameService } from '../services';

@Injectable()
export class GameEffects {

  constructor(private update$: Actions,
    @Inject(GAME_SERVICE) private gameService: GameService,
    private store: Store<AppState>) {
  }

  @Effect() tileUpdate$ = this.update$
    .ofType(GameActions.TILE_UPDATE)
    .do(() => this.store.dispatch(new GameActions.MyTurnUpdateAction(false)))
    .map(action => action.payload)
    .map(tile => new GameActions.TileUpdateSuccessAction(tile));
    // .do(tile => this.gameService.updateTile(tile));

  // just for testing
  @Effect() myTurnUpdate$ = this.update$
    .ofType(GameActions.TILE_UPDATE_SUCCESS)
    .delay(3000)
    .do(() => this.store.dispatch(new GameActions.MyTurnUpdateAction(true)));

}

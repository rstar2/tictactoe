import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


import { AppState } from '../store/state';
import { GameActions, TitleActions } from '../store/actions';
import { GAME_SERVICE, GameService } from '../services';

@Injectable()
export class GameEffects {

  constructor(private update$: Actions,
    @Inject(GAME_SERVICE) private gameService: GameService,
    private store: Store<AppState>) {
  }

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  getTitle$: Observable<any> = Observable.defer(() => {
    this.gameService.getTitle()
      .do(val => {
        return val;
      })
      .subscribe(title => this.store.dispatch(new TitleActions.TitleUpdateAction(title)));
    return Observable.of('OK');
  });

  // TODO: implement
  @Effect() tileUpdate$ = this.update$
    .ofType(GameActions.TILE_UPDATE);
  // .switchMap(() => this.svc.getHeroes())
  // .map(heroes => this.heroActions.loadHeroesSuccess(heroes));




}

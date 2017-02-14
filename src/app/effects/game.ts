import { todo } from '../store/reducers';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { GameActions } from '../store/actions';
import { GameFirebaseService } from '../services/game-firebase.service';

@Injectable()
export class GameEffects {
  constructor(private update$: Actions,
    private svc: GameFirebaseService
  ) { }

  // TODO: implement
  @Effect() tileUpdate$ = this.update$
        .ofType(GameActions.TILE_UPDATE);
        // .switchMap(() => this.svc.getHeroes())
        // .map(heroes => this.heroActions.loadHeroesSuccess(heroes));

}

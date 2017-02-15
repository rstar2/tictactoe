import { Inject, Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { GameActions } from '../store/actions';
import { GAME_SERVICE, GameService } from '../services';

@Injectable()
export class GameEffects {
  constructor(private update$: Actions,
    @Inject(GAME_SERVICE) private gameService: GameService
  ) { }

  // TODO: implement
  @Effect() tileUpdate$ = this.update$
        .ofType(GameActions.TILE_UPDATE);
        // .switchMap(() => this.svc.getHeroes())
        // .map(heroes => this.heroActions.loadHeroesSuccess(heroes));

}

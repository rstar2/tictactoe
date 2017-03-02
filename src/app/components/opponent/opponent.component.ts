import { GameStartAction } from '../../store/actions/game';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { GameActions } from '../../store/actions';
import { AppState } from '../../store/state';
import { Opponent } from '../../model/opponent';
import { FactoryGameService, OpponentService, UID_COMPUTER } from '../../services';

@Component({
  selector: 'app-opponent',
  template: `
        <h1>
        <select #select>
           <option *ngFor="let opp of opponents$ | async"
              [value]="serializeOpponent(opp)">
              {{opp.name}}
           </option>
        </select>
        </h1>

        <nav>
           <a (click)="startGame(select.value)">Game</a>
        </nav>
        <router-outlet></router-outlet>
`
})
export class OpponentComponent implements OnInit {

  opponents$: Observable<Opponent[]>;

  constructor(private router: Router, private route: ActivatedRoute,
    private oppenentService: OpponentService,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.opponents$ = this.oppenentService.getOpponents();
  }

  serializeOpponent(opp: Opponent): string {
    return JSON.stringify(opp);
  }
  deserializeOpponent(oppJSON: string): Opponent {
    return JSON.parse(oppJSON);
  }

  startGame(oppJSON: string) {
    let opponent = this.deserializeOpponent(oppJSON);
    this.store.dispatch(new GameActions.GameStartAction({ opponent, isMyGame: true }));

    this.router.navigate(['game'],
      { relativeTo: this.route, queryParams: { uid: opponent.uid } });
  }
}

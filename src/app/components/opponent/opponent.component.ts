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
        <label>Select opponent</label>

        <select #select>
           <option *ngFor="let opp of opponents$ | async"
              [value]="serializeOpponent(opp)">
              {{opp.name}}
           </option>
        </select>

        <nav>
           <a href="javascript:void(0)" (click)="startGame(select.value)">Start Game</a>
        </nav>
`
})
export class OpponentComponent implements OnInit {

  opponents$: Observable<Opponent[]>;

  constructor(private router: Router, private route: ActivatedRoute,
    private opponentService: OpponentService,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // here the unsupsciption is handled internally vy the Angula 'async' pipe
    this.opponents$ = this.opponentService.getOpponents();
  }

  serializeOpponent(opp: Opponent): string {
    return JSON.stringify(opp);
  }
  deserializeOpponent(oppJSON: string): Opponent {
    return JSON.parse(oppJSON);
  }

  startGame(oppJSON: string) {
    let opponent = this.deserializeOpponent(oppJSON);
    this.store.dispatch(new GameActions.OpponentUpdateAction({ opponent, isMyGame: true }));

    this.router.navigate(['game'],
      { /*relativeTo: this.route,*/ queryParams: { uid: opponent.uid } });
  }
}

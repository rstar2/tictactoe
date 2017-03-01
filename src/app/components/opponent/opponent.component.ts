
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Opponent } from '../../model/opponent';
import { FactoryGameService, OpponentService, UID_COMPUTER } from '../../services';

@Component({
  selector: 'app-opponent',
  template: `
        <h1>
        <select #select>
           <option *ngFor="let opp of opponents$ | async"
              [value]="opp.uid">
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
    private factoryGameService: FactoryGameService) {
  }

  ngOnInit(): void {
    this.opponents$ = this.oppenentService.getOpponents();
  }

  startGame(uid: string) {
    this.factoryGameService.startGame(uid);

    this.router.navigate(['game'],
      { relativeTo: this.route, queryParams: { uid } });
  }
}

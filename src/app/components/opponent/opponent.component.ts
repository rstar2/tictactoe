import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { OpponentService, UID_COMPUTER } from '../../services';

@Component({
  selector: 'app-opponent',
  template: `
        <h1>
        <select #select>
           <option value="UID_COMPUTER">Computer</option>
           <option *ngFor="let opp of opponents" [value]="opp.uid">
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

  opponents: any;

  @ViewChild('select')
  select: HTMLSelectElement;

  constructor(private router: Router, private route: ActivatedRoute,
    private oppenentService: OpponentService) {
  }

  ngOnInit(): void {
    this.opponents = [
      { uid: 'UID_1', name: 'User 1' },
      { uid: 'UID_2', name: 'User 2' }
    ];
  }

  startGame(uid: string) {
    this.oppenentService.setOpponentUid(uid);
    this.router.navigate(['game'],
      { relativeTo: this.route, queryParams: { uid } });
  }
}

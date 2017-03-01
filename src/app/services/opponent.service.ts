import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Opponent } from '../model/opponent';

export const UID_COMPUTER = '__!__Computer__!__';

@Injectable()
export class OpponentService implements OnInit {

  private oppoentUid: string;

  ngOnInit(): void {
  }

  isComputer(oppoentUid): boolean {
    return this.oppoentUid === UID_COMPUTER;
  }

  getOpponents(isAddComputer = true): Observable<Opponent[]> {
    let opponents: Opponent[] = [
      { uid: 'UID_1', name: 'User 1' },
      { uid: 'UID_2', name: 'User 2' }
    ];
    let opponents$: Observable<Opponent> = Observable.from(opponents);

    // we have a stream of single opponents so accumulate them to a stram of batches
    let opponentsBatch$: Observable<Opponent[]> =
      opponents$.scan((acc: Opponent[], opp: Opponent) => {
        acc.push(opp);
        return acc;
      }, isAddComputer ? [{ uid: UID_COMPUTER, name: 'Computer' }] : []);


    return opponentsBatch$;
  }

}

import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { GameService } from './game.service';
import { AppState } from '../store/state';
import { GameActions } from '../store/actions';
import { Tile, TileState } from '../model';


export const UID_COMPUTER = '__!__Computer__!__';

@Injectable()
export class OpponentService implements OnInit {

  private oppoentUid: string;

  ngOnInit(): void {
  }

  getOpponentUid(): string {
    return this.oppoentUid;
  }

  isComputer(): boolean {
    return this.oppoentUid === UID_COMPUTER;
  }

}

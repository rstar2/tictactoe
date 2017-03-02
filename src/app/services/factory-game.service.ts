import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Store } from '@ngrx/store';

import { GameService } from './game.service';
import { GameComputerService } from './game-computer.service';
import { GameFirebaseService } from './game-firebase.service';
import { OpponentService } from './opponent.service';

import { AppState } from '../store/state';

@Injectable()
export class FactoryGameService {

  private gameService: GameService;

  constructor(private opponentService: OpponentService,
    private store: Store<AppState>, private af: AngularFire) {
  }

  hasGameService(): boolean {
    return !!this.gameService;
  }

  startGame(opponentUid: string): void {
    if (this.opponentService.isComputer(opponentUid)) {
      this.gameService = new GameComputerService(opponentUid, this.store);
    } else {
      this.gameService = new GameFirebaseService(opponentUid, this.store, this.af);
    }

    // TODO: send to store some action to crear its state
  }

  getGameService(): GameService {
    if (!this.hasGameService()) {
      throw new Error('GameService is not yet created');
    }
    return this.gameService;
  }
}

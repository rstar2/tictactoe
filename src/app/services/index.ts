import { OpaqueToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFire } from 'angularfire2';

import { OpponentService } from './opponent.service';

import { GAME_SERVICE, GameService } from './game.service';
import { GameFirebaseService } from './game-firebase.service';
import { GameComputerService } from './game-computer.service';
import { GameMockService } from './game-mock.service';

import { AppState } from '../store/state';

export * from './game.service';
export * from './opponent.service';


let gameServiceFactory = (opponentService: OpponentService,
  store: Store<AppState>, af: AngularFire): GameService => {
  if (opponentService.isComputer()) {
    return new GameComputerService(store);
  } else {
    return new GameFirebaseService(store, af);
  }
};

const commonServices: any[] = [OpponentService];

export const mockServices = commonServices.concat(
  {
    provide: GAME_SERVICE,
    useClass: GameMockService
  }
);

export default commonServices.concat({
  provide: GAME_SERVICE,
  useFactory: gameServiceFactory,
  deps: [OpponentService, Store, AngularFire]
}
);



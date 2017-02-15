import { OpaqueToken } from '@angular/core';
import { GAME_SERVICE, GameService } from './game.service';
import { GameFirebaseService } from './game-firebase.service';

export * from './game.service';
export * from './game-firebase.service';

export default [
  { provide: GAME_SERVICE, useClass: GameFirebaseService }
];

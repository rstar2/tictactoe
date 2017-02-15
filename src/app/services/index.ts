import { OpaqueToken } from '@angular/core';
import { GAME_SERVICE, GameService } from './game.service';
import { GameFirebaseService } from './game-firebase.service';
import { GameMockService } from './game-mock.service';

export * from './game.service';
export * from './game-firebase.service';
export * from './game-mock.service';

export const mockServices = [
  { provide: GAME_SERVICE, useClass: GameMockService }
];

export default [
  { provide: GAME_SERVICE, useClass: GameFirebaseService }
];

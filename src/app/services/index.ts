import { OpponentService } from './opponent.service';
import { FactoryGameService } from './factory-game.service';
import { UIService } from './ui.service';

export * from './factory-game.service';
export * from './ui.service';
export * from './game.service';
export * from './opponent.service';

export default [OpponentService, FactoryGameService, UIService];



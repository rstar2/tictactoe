import { OpponentService } from './opponent.service';
import { FactoryGameService } from './factory-game.service';
import { LogicService } from './logic.service';
import { UIService } from './ui.service';

export * from './factory-game.service';
export * from './game.service';
export * from './ui.service';

export * from './opponent.service';
export * from './logic.service';

export default [UIService, OpponentService, FactoryGameService, LogicService];



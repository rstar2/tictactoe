import { OpponentService } from './opponent.service';
import { FactoryGameService } from './factory-game.service';
import { LogicService } from './logic.service';
import { UIService } from './ui.service';

export * from './factory-game.service';
export * from './game.service';
export * from './ui.service';

export * from './opponent.service';
export * from './logic.service';

// export as an array, not as default as then the AOT compilator is complaning with
// "ERROR in Cannot read property 'provide' of null"
export const services = [UIService, OpponentService, FactoryGameService, LogicService];



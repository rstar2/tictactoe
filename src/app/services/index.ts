import { OpponentService } from './opponent.service';
import { FactoryGameService } from './factory-game.service';
import { TitleService } from './title.service';

export * from './factory-game.service';
export * from './title.service';
export * from './game.service';
export * from './opponent.service';

export default [OpponentService, FactoryGameService, TitleService];



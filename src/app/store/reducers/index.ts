import { uiReducer } from './ui';
import { gameReducer } from './game';

export * from './game';
export * from './ui';


export default [gameReducer, uiReducer];

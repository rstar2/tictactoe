/**
 * Created by rumen on 2/13/2017.
 */

import { GameState } from './game';
import { UIState } from './ui';

export { GameState, UIState };

export interface AppState {
  game: GameState;
  ui: UIState;
}

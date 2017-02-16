import { Action } from '@ngrx/store';

import { type } from '../utils';

export const TITLE_UPDATE: string = type('[Title] Update');

export class TitleUpdateAction implements Action {
  type = TITLE_UPDATE;

  constructor(public payload: string) {
  }
}

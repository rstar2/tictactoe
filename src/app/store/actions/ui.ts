/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from '@ngrx/store';

import { type } from '../../utils';

export const UI_TITLE_UPDATE: string = type('[UI] Title Update');

export class UITitleUpdateAction implements Action {
  type = UI_TITLE_UPDATE;

  constructor(public payload: string) {
  }
}

export const TITLE_UPDATE: string = type('[Title] Update');


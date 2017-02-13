/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from "@ngrx/store";

import { type } from "../utils";

export const UI_UPDATE: string = type('[UI] Update');

export class UIUpdateAction implements Action {
  type = UI_UPDATE;

  constructor(public payload: boolean) {
  }
}

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

import { AppState } from '../store/state';
import { UIActions } from '../store/actions';
import { UIService } from '../services';

@Injectable()
export class UIEffects {

  constructor(private uiService: UIService,
    private store: Store<AppState>) {
  }

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  getTitle$: Observable<string> = Observable.defer(() => {
    this.uiService.getTitle()
      .subscribe(title => this.store.dispatch(new UIActions.UITitleUpdateAction(title)));

    return Observable.of('OK');
  });


}

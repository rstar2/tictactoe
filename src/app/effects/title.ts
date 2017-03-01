import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

import { AppState } from '../store/state';
import { TitleActions } from '../store/actions';
import { TitleService } from '../services';

@Injectable()
export class TitleEffects {

  constructor(private titleService: TitleService,
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
    this.titleService.getTitle()
      .subscribe(title => this.store.dispatch(new TitleActions.TitleUpdateAction(title)));

    return Observable.of('OK');
  });


}

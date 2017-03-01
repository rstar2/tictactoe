import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/state';
import { FactoryGameService, GameService } from './services';
import { getTitle } from './store/reducers';

@Component({
  selector: 'app-root',
  template: `
        <h1> {{title}} </h1>
        <nav>
           <a routerLink="/login">Login</a>
           <a routerLink="/start">Start</a>
        </nav>
        <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // use the store (and listen to changes from it)
    this.store.select(getTitle).subscribe(title => this.title = title);
  }
}

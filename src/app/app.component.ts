import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/state';
import { GAME_SERVICE, GameService } from './services';
import { getTitle, getGameState } from './store/reducers';

@Component({
  selector: 'app-root',
  template: `
       <h1> {{title}} </h1>
        <nav>
           <a routerLink="/login">Login</a>
           <a routerLink="/game">Game</a>
           <a routerLink="/not">Not</a>
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

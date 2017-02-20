import { Store } from '@ngrx/store';
import { Component, Inject, OnInit } from '@angular/core';

import { AppState } from '../store/state';
import { GAME_SERVICE, GameService } from '../services';
import { getTitle, getGameState } from '../store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor( @Inject(GAME_SERVICE) private gameService: GameService,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // use directly the service
    // this.gameService.getTitle().subscribe(title => this.title = title);

    // use the store (and listen to cganges from it)
    this.store.select(getTitle).subscribe(title => this.title = title);
  }
}

import { debuglog, log } from 'util';
import { Component, Inject } from '@angular/core';

import { GAME_SERVICE, GameService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(@Inject(GAME_SERVICE) private gameService: GameService) {
    this.gameService.getTitle().subscribe(val => this.title = val);
  }

}

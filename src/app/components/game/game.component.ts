import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/state';
import { getCurrentGame } from '../../store/reducers';
import { IndexPair, TileState, Tile, Game } from '../../model';

@Component({
  selector: 'app-game',
  template: `
    <p>
      game Works!
    </p>

    <!-- using a pipe -->
    <div>
        <app-tile
            *ngFor="let tile of game | gameToTiles"
            [tile]="tile"
            (click)="onTileClick(tile, $event)"
        ></app-tile>
    </div>

    <!-- using a structural directive - not ready yet -->
    <ng-container *appForEachTile="let tile of game.tiles">
        <app-tile
            [tile]="tile"
            (click)="onTileClick(tile, $event)"
         ></app-tile>
    </ng-container>
  `,
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  isWaiting = false;

  constructor(private store: Store<AppState>) { }

  onTileClick(tile: Tile, event: MouseEvent) {
    if (event.ctrlKey) {
      if (!this.isWaiting) { return; }
      console.log('Click-Ctrl', tile);
    } else {
      if (this.isWaiting) { return; }
      console.log('Click', tile);
    }
    this.isWaiting = !this.isWaiting;
  }

  ngOnInit() {
    this.store.select(getCurrentGame).subscribe((game: Game) => {
      this.game = game;
    });
  }



}

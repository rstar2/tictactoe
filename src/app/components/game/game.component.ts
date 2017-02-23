import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IndexPair, TileState, Tile, Game } from '../../model';

import { AppState } from '../../store/state';
import { getCurrentGame } from '../../store/reducers';
import { GameActions } from '../../store/actions';


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
    if (tile.state !== TileState.Empty) {
      console.warn('Tile', tile, ' is already dirty');
      return;
    }

    // if (event.ctrlKey === !this.isWaiting) {
    //   console.warn('Waiting for our turn');
    //   return;
    // }
    this.isWaiting = !this.isWaiting;

    let stateNew;
    if (this.isWaiting) {
      console.log('Opponent turn', tile);
      stateNew = TileState.Zero0;
    } else {
      console.log('My turn on', tile);
      stateNew = TileState.Ex1;
    }
    let tileNew = Object.assign(tile, {state: stateNew});
    this.store.dispatch(new GameActions.TileUpdateAction(tileNew));
  }

  ngOnInit() {
    this.store.select(getCurrentGame).subscribe((game: Game) => {
      this.game = game;
    });
  }



}

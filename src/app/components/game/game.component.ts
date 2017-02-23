import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IndexPair, TileState, Tile, Game } from '../../model';

import { AppState } from '../../store/state';
import { getGame } from '../../store/reducers';
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

  tileStateMe: TileState;
  tileStateOponent: TileState;

  isMyTurn: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.tileStateMe = TileState.Zero0;
    this.tileStateOponent = TileState.Ex1;
    this.isMyTurn = true;

    this.store.select(getGame).subscribe((game: Game) => {
      this.game = game;
    });
  }

  onTileClick(tile: Tile) {
    if (tile.state !== TileState.Empty) {
      console.warn('Tile', tile, ' is already dirty');
      return;
    }

    // if (!this.isMyTurn) {
    //   console.info('Waiting for my turn');
    //   return;
    // }
    this.isMyTurn = !this.isMyTurn;
    let tileNew = Object.assign(tile, {state: this.isMyTurn ? this.tileStateMe : this.tileStateOponent});
    this.store.dispatch(new GameActions.TileUpdateAction(tileNew));
  }

}

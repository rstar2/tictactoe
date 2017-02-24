import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IndexPair, TileState, Tile, Game } from '../../model';

import { AppState } from '../../store/state';
import { getGame, getMyTurn } from '../../store/reducers';
import { GameActions } from '../../store/actions';


@Component({
  selector: 'app-game',
  template: `
    <p>
      {{ isMyTurn ? "It's my turn" : "Waiting for oponent turn"}}
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
    this.tileStateMe = TileState.Ex1;
    this.tileStateOponent = TileState.Zero0;

    this.store.select(getGame).subscribe((game: Game) => {
      this.game = game;
    });

    this.store.select(getMyTurn).subscribe((isMyTurn: boolean) => {
      this.isMyTurn = isMyTurn;
    });
  }

  onTileClick(tile: Tile) {
    if (tile.state !== TileState.Empty) {
      console.warn('Tile', tile, ' is already dirty');
      return;
    }

    if (!this.isMyTurn) {
      console.log('Waiting for my turn');
      return;
    }

    let tileNew = Object.assign(tile, {state: this.isMyTurn ? this.tileStateMe : this.tileStateOponent});
    this.store.dispatch(new GameActions.TileUpdateAction(tileNew));
  }

}

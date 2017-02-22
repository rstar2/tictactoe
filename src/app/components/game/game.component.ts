import { Component, OnInit } from '@angular/core';

import { IndexPair, TileState, Tile } from '../../model';

@Component({
  selector: 'app-game',
  template: `
    <p>
      game Works!
    </p>
    <div>
         <app-tile
           *ngFor="let tile of tiles"
           [tile]="tile"
           (click)="onTileClick(tile, $event)"
         ></app-tile>
         <div appForEachTile></div>
    </div>
  `,
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  tiles: Tile[];

  isWaiting = false;

  constructor() { }

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
    this.tiles = [
      {
        index: new IndexPair(0, 0),
        state: TileState.Empty
      },
      {
        index: new IndexPair(0, 1),
        state: TileState.Ex1
      },
      {
        index: new IndexPair(1, 0),
        state: TileState.Zero0
      }
    ];
  }

}

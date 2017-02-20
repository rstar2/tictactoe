import { Component, Input } from '@angular/core';

import { Tile, TileState } from '../../model';


@Component({
  selector: 'app-tile',
  template: `
    <span [attr.class]="tileClass">
      tile Works!
    </span>
  `,
  styleUrls: ['./tile.component.css']
})
export class TileComponent {

  @Input()
  tile: Tile;

  get tileClass(): string {
    return TileState[this.tile.state];
  }

}

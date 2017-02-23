import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  Output,
  SimpleChanges
} from '@angular/core';

import { Tile, TileState } from '../../model';


@Component({
  selector: 'app-tile',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <svg [ngSwitch]="tile.state" width="100" height="100" [attr.class]="tileClass">
        <circle  *ngSwitchCase="TileState.Empty" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <circle  *ngSwitchCase="TileState.Zero0" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        <polygon *ngSwitchCase="TileState.Ex1" points="50,10 10,90 90,35 10,35 90,90" style="fill:lime;stroke:purple;stroke-width:5;"/>
    </svg>
  `,
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  // allows you to use the TileState enum in template
  TileState = TileState;

  @Input()
  tile: Tile;

  get tileClass(): string {
    return TileState[this.tile.state];
  }

  ngOnInit(): void {
    console.log('OnInit tile', this.tile);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy tile', this.tile);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changed tile', changes);
  }

  ngDoCheck(): void {
    // console.log('DoCheck tile', this.tile);
  }

}

import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

import { Tile, TileState } from '../../model';


@Component({
  selector: 'app-tile',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <svg class="tile" [ngSwitch]="tile.state">
        <circle class="Empty" cx="50" cy="50" r="40"  />

        <path [attr.class]="tileClass" *ngSwitchCase="TileState.Zero0" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        <polygon [attr.class]="tileClass" *ngSwitchCase="TileState.Ex1" points="50,10 10,90 90,35 10,35 90,90"/>
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

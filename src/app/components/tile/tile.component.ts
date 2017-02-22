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
    <span [attr.class]="tileClass">
      tile {{tileClass}} !
    </span>
  `,
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

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
    //console.log('DoCheck tile', this.tile);
  }

}

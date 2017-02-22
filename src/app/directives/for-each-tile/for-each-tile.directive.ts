import { NgForRow } from '@angular/common/src/directives/ng_for';
import { Directive, Input, IterableDiffers, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Matrix, Tile } from '../../model';

@Directive({
  selector: '[appForEachTile]'
})
export class ForEachTileDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('appForEachTileOf')
  matrix: Matrix<Tile>;

  // constructor(viewContainer: ViewContainerRef,
  // template: TemplateRef<NgForRow>,
  // differs: IterableDiffers) { }

  ngOnInit(): void {
    console.log('OnInit ForEachTileDirective');
  }

}

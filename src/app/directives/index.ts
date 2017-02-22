import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForEachTileDirective } from './for-each-tile/for-each-tile.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ForEachTileDirective],
  exports: [ForEachTileDirective],
  providers: []
})
export class DirectivesModule { }

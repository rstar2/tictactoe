import { NgModule } from '@angular/core';

import { ForEachTileDirective } from './for-each-tile/for-each-tile.directive';

@NgModule({
  declarations: [ForEachTileDirective],
  exports: [ForEachTileDirective]
})
export class DirectivesModule { }

import { NgModule } from '@angular/core';

import { GamePipe } from './game.pipe';

@NgModule({
  declarations: [GamePipe],
  exports: [GamePipe]
})
export class PipesModule { }

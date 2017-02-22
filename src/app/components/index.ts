import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../directives';

import { GamePipe } from '../pipes';


import { GameComponent } from './game/game.component';
import { TileComponent } from './tile/tile.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    GamePipe,
    AppComponent, GameComponent, TileComponent
  ],
  exports: [AppComponent],
  providers: []
})
export class ComponentsModule { }

export { AppComponent };

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

import { GameRoutingModule } from './game/game-routing.module';

import { OpponentComponent } from './opponent/opponent.component';
import { GameComponent } from './game/game.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,

    GameRoutingModule
  ],
  declarations: [
    OpponentComponent,
    GameComponent,
    TileComponent
  ],
  providers: []
})
export class ComponentsModule { }

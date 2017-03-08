import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

import { ComponentsRoutingModule } from './components-routing.module';

import { OpponentComponent } from './opponent/opponent.component';
import { GameComponent } from './game/game.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,

    ComponentsRoutingModule
  ],
  declarations: [
    OpponentComponent,
    GameComponent,
    TileComponent
  ],
  providers: []
})
export class ComponentsModule { }

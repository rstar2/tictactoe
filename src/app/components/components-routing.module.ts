import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpponentComponent } from './opponent/opponent.component';
import { GameComponent } from './game/game.component';

const gameRoutes: Routes = [
  { path: 'opponent', component: OpponentComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ComponentsRoutingModule { }

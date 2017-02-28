import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game.component';

const gameRoutes: Routes = [
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
export class GameRoutingModule { }

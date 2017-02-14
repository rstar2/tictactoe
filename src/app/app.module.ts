import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import appStore from './store';

import { GameEffects } from './effects/game';
import { AppComponent } from './app.component';
import GameFirebaseService  from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(appStore),
    EffectsModule.run(GameEffects)
  ],
  providers: [...GameFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';

import appStore from './store';

import { GameEffects } from './effects/game';
import { AppComponent } from './app.component';
import GameFirebaseService from './services';

import firebaseConfig from './firebase.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(appStore),
    EffectsModule.run(GameEffects),

    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [...GameFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

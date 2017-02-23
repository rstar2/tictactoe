import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';

import appStoreReducer from './store';

import { GameEffects, TitleEffects } from './effects';
import providerServices from './services';

import firebaseConfig from './firebase.config';
import { ComponentsModule, AppComponent } from './components';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    EffectsModule.run(GameEffects),
    EffectsModule.run(TitleEffects),

    AngularFireModule.initializeApp(firebaseConfig),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(appStoreReducer),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    ComponentsModule
  ],
  providers: [...providerServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}

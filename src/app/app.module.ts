import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';

import appStoreReducer from './store';
import { services } from './services';
import firebaseConfig from './firebase.config';
import { GameEffects, UIEffects } from './effects';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { RoutingModule } from './routes/routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,

    EffectsModule.run(GameEffects),
    EffectsModule.run(UIEffects),

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

    ComponentsModule,

    // the main App routing module SHOULD be LAST as
    // otherwise the "**" path (PathNotFound) will be matched before any previous child routing module
    RoutingModule
  ],
  declarations: [AppComponent],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {
}

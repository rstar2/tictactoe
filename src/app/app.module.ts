import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import appStore from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(appStore),
    // EffectsModule.run(GameStateEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

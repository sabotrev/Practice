import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlattenArrayComponent } from './flatten-array/flatten-array.component';

@NgModule({
  declarations: [
    AppComponent,
    FlattenArrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

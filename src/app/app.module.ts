import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlattenArrayComponent } from './flatten-array/flatten-array.component';
import { SentenceReverseComponent } from './sentence-reverse/sentence-reverse.component';
import { MemoizationComponent } from './memoization/memoization.component';

@NgModule({
  declarations: [
    AppComponent,
    FlattenArrayComponent,
    SentenceReverseComponent,
    MemoizationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

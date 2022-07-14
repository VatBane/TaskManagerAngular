import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from "angular2-carousel";
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

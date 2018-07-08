import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from "angular2-carousel";
import { RouterModule, Routes} from '@angular/router';
import { AlertModule } from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { PiaoComponent } from './piao/piao.component';


@NgModule({
  declarations: [
    AppComponent,
    PiaoComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

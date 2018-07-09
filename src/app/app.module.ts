import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from "angular2-carousel";
import { AlertModule } from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { PeaoComponent } from './peao/peao.component';
import { LoginComponent } from './login/login.component';
import { ControleComponent } from './controle/controle.component';


@NgModule({
  declarations: [
    AppComponent,
    PeaoComponent,
    LoginComponent,
    ControleComponent
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

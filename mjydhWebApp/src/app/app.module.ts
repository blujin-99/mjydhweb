import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { ListaSistemasComponent } from './modules/lista-sistemas/lista-sistemas.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalContactosComponent } from './modules/components/modal-contactos/modal-contactos.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaSistemasComponent,
    FooterComponent,
    ModalContactosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

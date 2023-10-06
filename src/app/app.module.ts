import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { ListaSistemasComponent } from './modules/lista-sistemas/lista-sistemas.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalContactosComponent } from './modules/components/modal-contactos/modal-contactos.component'
import { firebaseConfig } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { NotificacionesComponent } from './core/layouts/notificaciones/notificaciones.component';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from './core/service/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaSistemasComponent,
    FooterComponent,
    ModalContactosComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireMessagingModule,
  
  ],
  providers: [NotificationService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

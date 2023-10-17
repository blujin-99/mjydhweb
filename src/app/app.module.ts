import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { ListaSistemasComponent } from './modules/sistemas/pages/lista-sistemas/lista-sistemas.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalContactosComponent } from './modules/sistemas/components/modal-contactos/modal-contactos.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { NotificacionesComponent } from './core/layouts/notificaciones/notificaciones.component';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from './core/service/notification.service';
import { InterceptorModule } from './core/interceptor/interceptor.module';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaSistemasComponent,
    FooterComponent,
    ModalContactosComponent,
    NotificacionesComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InterceptorModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
  ],
  providers: [NotificationService, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

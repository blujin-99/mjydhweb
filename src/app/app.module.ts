import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';

import { NotificacionesComponent } from './core/components/notificaciones/notificaciones.component';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from './core/service/notification.service';
import { InterceptorModule } from './core/interceptor/interceptor.module';
import { ModalContactosComponent } from './modules/sistemas/components/modal-contactos/modal-contactos.component';
import { ListaSistemasComponent } from './modules/sistemas/pages/lista-sistemas/lista-sistemas.component';
import { AutofocusDirective } from './core/layouts/header/components/autofocus.directive';
import { ErrorLoginComponent } from './core/layouts/error-login/error-login.component';
import { UsuarioService } from './core/service/usuario.service';
import { SidebarComponent } from './core/layouts/sidebar/sidebar.component';
import { ListSidebarComponent } from './core/components/list-sidebar/list-sidebar.component';
import { BandejaNotificacionesComponent } from './modules/bandeja-notificaciones/pages/bandeja-notificaciones.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificacionesComponent,
    ListaSistemasComponent,
    ModalContactosComponent,
    AutofocusDirective,
    ErrorLoginComponent,
    SidebarComponent,
    ListSidebarComponent,
    BandejaNotificacionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InterceptorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),


  ],
  providers: [NotificationService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

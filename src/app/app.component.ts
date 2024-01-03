import { Component, OnInit, HostListener } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { LayoutService } from './core/service/layout.service';
import { SistemaService } from './modules/service/sistema.service';
import { initializeApp } from 'firebase/app';
import { NotificationService } from './core/service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  isDesktop: boolean = false;
  ministerio: string = ''

  constructor(
    private usuarioSrv: UsuarioService,
    public layoutSrv: LayoutService,
    protected sistemaSrv: SistemaService,
    public notificationSrv : NotificationService
  ) {
    this.usuarioSrv.refreshToken()
    this.isDesktop = window.innerWidth >= 768;
  }

  ngOnInit(): void {
    this.sistemaSrv.getMinisterio()
    this.usuarioSrv.initAuth();
    this.notificationSrv.requestPermission()
    this.notificationSrv.reciveMessaging()
    initFlowbite()
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }
}

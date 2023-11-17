import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { NotificationService } from '../../service/notification.service'; 
import { UsuarioService } from '../../service/usuario.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {
  isDesktop: boolean = false

  constructor(
    public layoutSrv: LayoutService,
    public notificacionSrv : NotificationService,
    public usuarioSrv : UsuarioService

     ){ this.isDesktop = window.innerWidth >= 768;}
  ngOnInit(): void {
    this.layoutSrv.mobileSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }


  showNotificaciones() {
    this.layoutSrv.toggleSidebar()
  }
}

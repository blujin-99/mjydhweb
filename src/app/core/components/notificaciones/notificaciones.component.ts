import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { NotificationService } from '../../service/notification.service'; 

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {
  constructor(public layoutSrv: LayoutService, public notificacionSrv : NotificationService){}
  ngOnInit(): void {
    this.layoutSrv.mobileSidebar();
  }



  showNotificaciones() {
    this.layoutSrv.toggleSidebar()
  }
}

import { Component } from '@angular/core';
import { NotificationService } from 'src/app/core/service/notification.service';
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-bandeja-notificaciones',
  templateUrl: './bandeja-notificaciones.component.html',
  styleUrls: ['./bandeja-notificaciones.component.scss']
})
export class BandejaNotificacionesComponent {
  constructor(public notificacionSrv: NotificationService, protected userSrv : UsuarioService){}
  reciveMessage: any[] = [];
  notificacion$ = this.notificacionSrv.noti$
  

  deleteNotification(id: number) {
    this.notificacionSrv.deleteItem(id)
  }
}

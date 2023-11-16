import { Component } from '@angular/core';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})

export class NotificacionesComponent {
   
  notificacion: boolean = false

  title : string = ''

  mensaje: string = ''

  url : any

  constructor(private notificacionSrv : NotificationService){}

  ngOnInit(): void {
     this.notificacionSrv.reciveMessaging()

     this.notificacionSrv.mensaje.subscribe((sms) => {
        if(sms){
          this.notificacion = true;
          this.title = sms.notification.title
          this.mensaje = sms.notification.body
          this.url = sms.data.url
        }else{
          this.notificacion = false
        }

     })
  }
}

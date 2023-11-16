import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  counter : string[] = []
  mensaje = new BehaviorSubject<any>(null)

  Watched : boolean = false

  constructor(private AFMessaging : AngularFireMessaging) { }

  requestPermission(){
    this.AFMessaging.requestToken.subscribe(
      (token) => {
        if(token){
          console.log(token)
        }
      }
    )
  }


  reciveMessaging(){
    this.AFMessaging.messages.subscribe((smRecived) =>{
      this.mensaje.next(smRecived)
      let notificaciones = {
        title: smRecived.notification?.title,
        body : smRecived.notification?.body,
        url: smRecived.data?.['url']
      }

      let notidata = JSON.parse(localStorage.getItem('notificacion') || '[]')
      notidata.push(notificaciones)
      localStorage.setItem('notificacion',JSON.stringify(notidata))
      let storage = localStorage.getItem('notificacion')
    })
  }

  checkNotificacion(){
    /**
     * obtengo los datos de las notificaciones que se guardaron en el localStorage
     */
      const count = localStorage.getItem('notifications')
      if (count) {
     /**
     * lo convierto en formato JSON
     */
        const counter = JSON.parse(count)
      /**
     * verifico si viene un array de objetos, sino, lo convierte en un array con objetos
     */
        this.counter = Array.isArray(counter) ? counter : [];
      }
    /**
     * cuento cuantos elementos hay en el array y lo devuelvo
     */
      return this.counter.length
  }

}

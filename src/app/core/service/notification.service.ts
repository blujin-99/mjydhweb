import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  counter : string[] = []
  mensaje = new BehaviorSubject<any>(null)
  notification = new BehaviorSubject<any[]>([])
  noti$: Observable<any[]> = this.notification.asObservable()
  Watched : boolean = false
  token?:string;
  locaNotificacion =
  environment.env + '_' + environment.pk + environment.notificacion.nombre;
  private sendToken = environment.baseUrl + environment.api.notificationUrl;
  private app = initializeApp(environment.firebaseConfig);
  private messaging = getMessaging(this.app);

  constructor(private userSrv : UsuarioService, private http : HttpClient){}


  requestPermission(){
    navigator.serviceWorker
      .register('assets/js/firebase-messaging-sw.js')
      .then((registration) => {
        // Realiza una verificación de tipos explícita
        let swRegistration = registration as ServiceWorkerRegistration;
        getToken(this.messaging, {
          serviceWorkerRegistration: swRegistration,
        }).then((token) => {
          this.registerToken(token);
        });
        // Continúa con el uso de swRegistration
      })
      .catch((error) => {
        console.error('Error al obtener el ServiceWorkerRegistration:', error);
      });
  }

    /**
   * Registro token para notificaciones de Usuario Logueado
   * @param token Registra token en el sistema
   */
    registerToken(token: string) {
      if (this.userSrv.getJWT()) {
        this.http.post(this.sendToken, { token }).subscribe();
      }
    }
  

  reciveMessaging(){
    onMessage(this.messaging, (smRecived) => {
      let notification = {
        title : smRecived.notification?.title,
        body : smRecived.notification?.body,
        url: smRecived.data?.['url']
      }
      this.saveNotification(notification)
    })
  }


   /**
   * Guarda notificación en local storage
   * @param notificacion
   */
  private saveNotification(notificacion: any) {
    let notifications = JSON.parse(
     this.notificacionPush|| '[]'
    );
    notifications.push(notificacion);
    this.notificacionPush = notifications
    //localStorage.setItem(this.locaNotificacion, JSON.stringify(notifications));
    this.noti$ = notifications;
  }


  checkNotification() {
    if (this.notificacionPush) {
     
      const counter = JSON.parse(this.notificacionPush);
     
      this.counter = Array.isArray(counter) ? counter : [];
      this.notification.next(Array.isArray(counter) ? counter : []);
    }
   
    return this.counter.length;
  }


  deleteItem(id: number) {
    if (this.notificacionPush) {
      const dataStorage = JSON.parse(this.notificacionPush);
      dataStorage.splice(id, 1);
      this.notificacionPush = dataStorage
      //localStorage.setItem(this.locaNotificacion, JSON.stringify(dataStorage));
    }
  }

  get notificacionPush(){
    return localStorage.getItem(this.locaNotificacion);
  }
  set notificacionPush(notificaciones:any){
    localStorage.setItem(this.locaNotificacion, JSON.stringify(notificaciones));
  }

}


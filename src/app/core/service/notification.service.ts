import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


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
      console.log(smRecived)
    })
  }


}

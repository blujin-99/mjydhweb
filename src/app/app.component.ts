import { Component,OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { NotificationService } from './core/service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mjydhWebApp';
 
   constructor(private notificationSrv: NotificationService){

   }

  ngOnInit(): void {
    
     this.notificationSrv.requestPermission()



    initFlowbite()
  }
}

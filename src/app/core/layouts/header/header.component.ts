import { Component, HostListener } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  ministerio: string = ''
  ministerioCorto : string = ''
  isDesktop : boolean = false

   constructor(private sistemaSrv: SistemaService){
    this.isDesktop = window.innerWidth >= 768 
   }
  
   @HostListener('window:resize', ['$event'])

   onResize(event : any){
    this.isDesktop = window.innerWidth >= 768 
   }



   ngOnInit(): void {
     this.sistemaSrv.getSistemas().subscribe(data => {
      if(data){
        for(let datos of data){
          datos
           this.ministerio = datos.app.Ministerio
           this.ministerioCorto = datos.app.MinisterioCorto
        }
     }
    })
    
   }
}

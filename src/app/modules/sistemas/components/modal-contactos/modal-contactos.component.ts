import { Component, OnInit, HostListener } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { ModalService } from 'src/app/modules/service/modal.service';

@Component({
  selector: 'app-modal-contactos',
  templateUrl: './modal-contactos.component.html',
  styleUrls: ['./modal-contactos.component.scss']
})
export class ModalContactosComponent implements OnInit {

  isDesktop : boolean

  sistema : string = ''

  contactos : any

  logo: string = ''
   
  
  constructor(
      protected modalSrv : ModalService,
      private sistemaSrv : SistemaService){
      this.isDesktop = window.innerWidth >= 768 
    }

  @HostListener('window:resize', ['$event'])

  onResize(event: any): void {
    this.isDesktop = window.innerWidth >= 768
  }

  ngOnInit(): void {
     
    this.sistemaSrv.data$.subscribe(contactos => {
      if (contactos) {
        this.contactos = contactos.contacto
      }
    })
    

  }
  
  closeModal(){
    this.modalSrv.closeModal()
  }
}

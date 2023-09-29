import { Component, OnInit, HostListener } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { SistemaService } from '../../service/sistema.service';

@Component({
  selector: 'app-modal-contactos',
  templateUrl: './modal-contactos.component.html',
  styleUrls: ['./modal-contactos.component.scss']
})
export class ModalContactosComponent implements OnInit {

  isDesktop : boolean

  sistema : string = ''

  contactos : any

  
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
        console.log(this.contactos)
      }
    })
    

  }
  
  closeModal(){
    this.modalSrv.closeModal()
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { SistemaService } from '../../service/sistema.service';

@Component({
  selector: 'app-modal-contactos',
  templateUrl: './modal-contactos.component.html',
  styleUrls: ['./modal-contactos.component.scss']
})
export class ModalContactosComponent implements OnInit {

  sistema : string = ''

  contactos : any
  
  constructor(
    protected modalSrv : ModalService,
    private sistemaSrv : SistemaService
    ){
  
  }
  
  ngOnInit(): void {

    this.sistemaSrv.data$.subscribe(contactos => {
      this.contactos = contactos.contacto
      console.log(this.contactos)
    })

  }
  
  closeModal(){
    this.modalSrv.closeModal()
  }
}

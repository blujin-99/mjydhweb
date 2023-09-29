import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../service/sistema.service';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.scss']
})
export class ListaSistemasComponent implements OnInit{

   constructor(
      private sistemaSrv : SistemaService,
      private ModalSrv : ModalService
      ){}

   sistemas : any

   ngOnInit(): void {

    this.sistemaSrv.getSistemas().subscribe(data => {
    this.sistemas = data
    })
    
  }


  openModal(id: number){
    this.sistemaSrv.setIdSistema(this.sistemas[id].datos)
    console.log(this.sistemas)
    this.ModalSrv.openModal()
    console.log(this.ModalSrv.isOpenModal())
  }

}

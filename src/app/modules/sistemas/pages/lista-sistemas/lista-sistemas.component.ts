import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { ModalService } from 'src/app/modules/service/modal.service';

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
    console.log(this.sistemas)
    })
    
  }

   irASistema(url:string){
    window.location.replace(url)
   }

  openModal(id: number){
    this.sistemaSrv.setIdSistema(this.sistemas[id].datos)
    this.ModalSrv.openModal()
  }

}

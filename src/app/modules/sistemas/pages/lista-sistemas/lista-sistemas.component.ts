import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { ModalService } from 'src/app/modules/service/modal.service';
import { SISTEMAS } from 'src/app/core/interfaces/sistemas.interface';

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
   
   logo : SISTEMAS | null = null

   ngOnInit(): void {
    this.sistemaSrv.getSistemas().subscribe(data => {
    this.sistemas = data
    for(let logo of this.sistemas){
    this.logo = logo.logo
    }

    })
    
  }

   irASistema(url:string){
    window.open(url)
   }

  openModal(id: number){
    this.sistemaSrv.setIdSistema(this.sistemas[id].datos)
    console.log(this.sistemas)
    this.ModalSrv.openModal()
  }

}

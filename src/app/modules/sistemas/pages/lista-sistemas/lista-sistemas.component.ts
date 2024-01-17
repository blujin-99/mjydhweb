import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { ModalService } from 'src/app/modules/service/modal.service';
import { ISistemas} from 'src/app/core/interfaces/sistemas.interface';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.scss']
})
export class ListaSistemasComponent implements OnInit{

   constructor(
      private sistemaSrv : SistemaService,
      private ModalSrv : ModalService,
      ){}

   sistemas : ISistemas[] = []

   ngOnInit(): void {
    this.sistemaSrv.getSistemas().subscribe(data => {
    this.sistemas = data
    })
    
  }

   irASistema(url:string){
    window.open(url)
   }

  openModal(id: number){
    this.sistemaSrv.setIdSistema(this.sistemas[id].datos)
    this.ModalSrv.openModal()
  }

}

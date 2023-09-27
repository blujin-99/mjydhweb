import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

   private isOpen = false;

   openModal(){
     this.isOpen = true;
   }

   closeModal(){
     this.isOpen = false
   }

   isOpenModal(){
    return this.isOpen
   }
}

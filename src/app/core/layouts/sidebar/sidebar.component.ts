import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public layoutSrv: LayoutService){
            // Recupera el valor de "isExpand" del localStorage al iniciar el componente
            const localStorageIsExpand = localStorage.getItem('isExpand');
            if (localStorageIsExpand) {
                this.layoutSrv.isExpand = JSON.parse(localStorageIsExpand);
            }
  }
}

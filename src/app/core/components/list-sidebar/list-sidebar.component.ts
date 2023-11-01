import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-list-sidebar',
  templateUrl: './list-sidebar.component.html',
  styleUrls: ['./list-sidebar.component.scss']
})
export class ListSidebarComponent {
 constructor(public layoutSrv: LayoutService){}
}

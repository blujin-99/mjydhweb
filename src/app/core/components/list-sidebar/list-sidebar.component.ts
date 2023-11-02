import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { UsuarioService } from '../../service/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-sidebar',
  templateUrl: './list-sidebar.component.html',
  styleUrls: ['./list-sidebar.component.scss']
})
export class ListSidebarComponent {

 constructor(
  public layoutSrv: LayoutService,
  protected userSrv : UsuarioService
  ){}

  urlPerfil = environment.perfil;

  login(){
    this.userSrv.login()
  }

}

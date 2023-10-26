import { Component, HostListener } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { UsuarioService } from '../../service/usuario.service';
import { IUser } from '../../interfaces/usuario.inteface';
import { environment } from 'src/environments/environment';
import { common } from 'src/environments/environment.common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  ministerio: string = '';
  ministerioCorto: string = '';
  isDesktop: boolean = false;
  user: any;
  urlPerfil = environment.perfil;

  constructor(
    private sistemaSrv: SistemaService,
    public usuarioSrv: UsuarioService
  ) {
    this.isDesktop = window.innerWidth >= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }

  ngOnInit(): void {
    this.sistemaSrv.getMinisterio().subscribe((nombre) =>{
       if(nombre){
          this.ministerio = nombre.Ministerio
           this.ministerioCorto = nombre.MinisterioCorto
       }
    })
  }


  login() {
   this.usuarioSrv.login()
  }

  logout() {
    this.usuarioSrv.logOut()
  }
}

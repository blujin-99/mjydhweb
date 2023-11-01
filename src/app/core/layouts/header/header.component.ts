import { Component, HostListener, Input } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isDesktop: boolean = false;
  user: any;
  urlPerfil = environment.perfil;

  @Input({required:true}) titulo = '';
  open = false;

  constructor(
    public usuarioSrv: UsuarioService
  ) {
    this.isDesktop = window.innerWidth >= 768;
  }

  openSidenav() {
    this.open = !this.open;
}


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }

  ngOnInit(): void {

  }


  login() {
   this.usuarioSrv.login()
  }

  logout() {
    this.usuarioSrv.logOut()
  }
}

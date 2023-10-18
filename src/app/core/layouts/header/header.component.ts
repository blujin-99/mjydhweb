import { Component, HostListener } from '@angular/core';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { UsuarioService } from '../../service/usuario.service';
import { IUser } from '../../interfaces/usuario.inteface';
import { environment } from 'src/environments/environment';

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

  constructor(
    private sistemaSrv: SistemaService,
    protected usuarioSrv: UsuarioService
  ) {
    this.isDesktop = window.innerWidth >= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }

  ngOnInit(): void {
    this.sistemaSrv.getSistemas().subscribe((data) => {
      if (data) {
        for (let datos of data) {
          datos;
          this.ministerio = datos.app.Ministerio;
          this.ministerioCorto = datos.app.MinisterioCorto;
        }
      }
    });
  }

  ngDoCheck(): void {
    this.user = this.usuarioSrv.getUser();

    /**
     * Si el usuario esta logeado y tiene foto de perfil
     * muestra la foto sino muestra un avatar default
     */

    if (this.user && this.user.foto) {
      console.log(this.user);
    }
  }

  login() {
    window.location.replace(
      environment.auth.urlaAuth +
        '/service-auth/oauth2.0/authorize?response_type=token&client_id=' +
        environment.auth.clientId +
        '&redirect_uri=' +
        environment.redirectUri
    );
  }

  logout() {
    localStorage.clear();

    window.location.replace('http://localhost:4200');
  }
}

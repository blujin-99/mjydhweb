import { Component, HostListener} from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { environment } from 'src/environments/environment';
import { SistemaService } from 'src/app/modules/service/sistema.service';
import { NotificationService } from '../../service/notification.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isDesktop: boolean = false;
  urlPerfil = environment.perfil;
  ministerio : string = ''
  ministerioCorto: string = ''

  open = false;

  constructor(
    public userSrv: UsuarioService,
    protected sistemaSrv : SistemaService,
    public notificacionSrv : NotificationService
  ) {
    this.isDesktop = window.innerWidth >= 768;
  }

  openSidenav() {
    this.open = !this.open;
}

 ngOnInit(): void {
   this.sistemaSrv.getMinisterio().subscribe(nombre => {

       this.ministerio = nombre.Ministerio
       this.ministerioCorto = nombre.MinisterioCorto

   })

 }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }


  logout() {
    this.userSrv.logOut()
  }

  login(){
    this.userSrv.login()
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { LayoutService } from './core/service/layout.service';
import { SistemaService } from './modules/service/sistema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ministerio: string = '';
  ministerioCorto: string = '';
  isDesktop: boolean = false;

  constructor(
    private usuarioSrv: UsuarioService,
    public layoutSrv: LayoutService,
    private sistemaSrv: SistemaService
  ) {
    this.usuarioSrv.refreshToken()
    this.isDesktop = window.innerWidth >= 768;
  }

  ngOnInit(): void {
    this.usuarioSrv.initAuth();
    initFlowbite()
  }
  
  ngDoCheck(): void {
    this.sistemaSrv.getMinisterio().subscribe((nombre) => {
      if (nombre) {
        if (this.isDesktop) {
          this.ministerio = nombre.Ministerio
        } else {
          this.ministerio = nombre.MinisterioCorto
        }
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }
}

import { Component,OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mjydhWebApp';
  constructor(private usuarioSrv : UsuarioService){}

  ngOnInit(): void {
    this.usuarioSrv.initAuth();
    initFlowbite()
  }
}

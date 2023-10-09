import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { IUser } from 'src/app/core/interfaces/usuario.inteface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
   constructor(private usuarioSrv: UsuarioService){}

   ngOnInit(): void {
      this.usuarioSrv.initAuth()
    
   }

}

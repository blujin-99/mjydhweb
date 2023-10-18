import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { UsuarioService } from 'src/app/core/service/usuario.service';

import { Token } from '@angular/compiler';


@NgModule({
    declarations: [],
    imports: [ CommonModule, AuthRoutingModule ],
    exports: [AuthRoutingModule],
    providers: [],
})
export class AuthModule
{ 
    constructor(private usuarioSrv: UsuarioService) {
        this.usuarioSrv.initAuth();
    }
    

}
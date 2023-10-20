import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../core/service/usuario.service';
import { inject } from '@angular/core';

export const loggedGuard: CanActivateFn = (route, state) => {
  let userSrv = inject(UsuarioService)

  if(userSrv.getUser()){
    return true;
  }

  return false;
};

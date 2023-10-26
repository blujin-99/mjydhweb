import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../service/usuario.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  excludeEndpoints: string[] = environment.excludedEndpoints;

  constructor(private usuarioSrv: UsuarioService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let jwt: string | null = this.usuarioSrv.getJWT();

    let request = req;
    if (
      !this.excludeEndpoints.some((endpoint) => req.url.includes(endpoint))
    ) {
      if (jwt) {
        request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${jwt}`,
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return next.handle(request);
  }
}

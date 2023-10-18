import { Injectable, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserCas } from '../interfaces/usuario.inteface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private user?: IUser;
  private userCas?: IUserCas;

  private url = environment.baseUrl + environment.api.outh;
  public loggedIn$ = signal<boolean>(false);

  constructor(private http: HttpClient, private location: Location) {}

  setUser(userData: IUserCas): void {
    this.userCas = {
      nombre: userData.nombre,
      apellido: userData.apellido,
      cuil: userData.cuil,
      email: userData.email,
      foto: userData.foto,
    };

    localStorage.setItem('userCas', JSON.stringify(this.userCas));
  }

  getUser(): any {
    const userJSON = localStorage.getItem('userCas');

    if (userJSON) {
      this.user = JSON.parse(userJSON);
      return this.user;
    } else {
      return null;
    }
  }
  initAuth(): void {
    if (!localStorage.getItem('user')) {
      const code: any = this.getAccessTokenFromUrl();
      if (code) {
        this.validateToken(code).subscribe((data: any) => {
          this.setUser(data.user.userCas);
          localStorage.setItem('token', data.token);
        });
      }
    }
  }

  /**
   * @returns access token
   */
  private getAccessTokenFromUrl(): string | null {
    let value = decodeURIComponent(
      this.location.path(true).split('access_token')[1]
    )
      .slice(1)
      .split('&');
    if (value[0]) {
      return value[0];
    }
    return null;
  }

  private validateToken(params: any) {
    const body = JSON.stringify({ access_token: params });
    return this.http.post(this.url, body);
  }
}

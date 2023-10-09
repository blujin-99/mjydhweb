import { Injectable, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/usuario.inteface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  private user ? :  IUser;
  private url = 'http://10.1.46.32:8181/registropropiedad/public/api/login/oauth';
  public loggedIn$ = signal<boolean>(false);

  constructor(private http:HttpClient, private location:Location) {}

  setUser(userData: any):void{
    this.user = {
      nombre: userData.user.nombre,
      apellido: userData.user.apellido,
      documento: userData.user.numero_documento,
      cuil: userData.user.cuil,
      matricula: userData.user?.matricula,
      email: userData.cas?.email,
      foto: userData.cas?.foto,
    };

    localStorage.setItem('user', JSON.stringify(this.user))
  }

  getUser(): any{
    const userJson = localStorage.getItem('user');

    if(userJson){
      this.user = JSON.parse(userJson);
      console.log(this.user)
      return this.user;
    }else{
      return null
    }
  }

  initAuth(): void {
    if (!localStorage.getItem('user')) {
      const code: any = this.getAccessTokenFromUrl();
      localStorage.setItem('access_token', code);
      this.validateToken(code).subscribe((data: any) => {
        this.setUser(data);
        localStorage.setItem('jwt', data.jwt);
      });
    }
  }

    /**
   * @returns access token
   */
    private getAccessTokenFromUrl(): string | null {
      const queryParams = this.location.path(true).split('#')[1];
      const params = new URLSearchParams(queryParams);
      return params.get('access_token');
    }
  
    private validateToken(params: any) {
      const body = JSON.stringify({ access_token: params });
      return this.http.post(this.url, body);
    }
}

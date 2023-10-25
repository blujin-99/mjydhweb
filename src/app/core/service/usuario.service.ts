import { Injectable, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient , HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { IUser, IUserCas } from '../interfaces/usuario.inteface';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private user?: IUser;
  private userCas?: IUserCas;

  private url = environment.baseUrl + environment.api.outh;
  public loggedIn$ = signal<boolean>(false);

  constructor(private http: HttpClient, private location: Location, ) {}

  setUser(userData: IUserCas): void {
      localStorage.setItem('MJYDH_CAS', JSON.stringify(userData));
  }

  getUser(): any {
    const userJSON = localStorage.getItem('MJYDH_CAS');
    if (userJSON) {
      return JSON.parse(userJSON);
    } else {
      return null;
    }
  }
  initAuth(): void {
    if (!localStorage.getItem('MJYDH_CAS')) {
      const code: any = this.getAccessTokenFromUrl();
      if (code) {
        this.validateToken(code).subscribe((data: any) => {
          this.setUser(data.user.userCas);
          localStorage.setItem('MJYDH_JWT', data.token);
          /**
           * una vez logueado direcciono al incio
           */
          window.location.href = environment.redirectUri + '/#/inicio';
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

  public logOut(){

    const url = `${environment.auth.urlaAuth}/service-auth/${environment.auth.logoutUrl}`
    localStorage.removeItem('MJYDH_JWT')
    localStorage.removeItem('MJYDH_CAS')
    window.location.href =url

    /** Debería obtener una respuesta de la url logout de status 200, si es el valor eliminia los datos del
     * localstorage, por el momentos la respuesta de la url se está examinando
     */
    // this.http.get(url, {observe:'response'}).subscribe(
    //   (response: HttpResponse<any>) =>{
    //     // if(response.status === 200){
    //     //    localStorage.removeItem('MJYDH_JWT')
    //     //    localStorage.removeItem('MJYDH_CAS')
    //     //    console.log(response)
    //     // }
    //   },
    // }
    //)
  }
}

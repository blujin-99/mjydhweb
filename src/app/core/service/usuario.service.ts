import { Injectable, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IUser, IUserCas } from '../interfaces/usuario.inteface';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import { PeriodicTaskService } from './periodic-task.service';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private user?: IUser;
  private userCas?: IUserCas;
  private urlLogout = environment.auth + environment.auth.logoutUrl;
  private url = environment.baseUrl + environment.api.outh;
  public loggedIn$ = signal<boolean>(false);
  private MJYDH_REFRESH: string = 'MJYDH_REFRESH';


  constructor(private http: HttpClient, private location: Location, private periodic: PeriodicTaskService) {
    sessionStorage.setItem(this.MJYDH_REFRESH, '0');
  }

  setUser(userData: IUserCas): void {
    sessionStorage.setItem(environment.login.mjydh_cas, JSON.stringify(userData));
  }

  getUser(): any {
    const userJSON = sessionStorage.getItem(environment.login.mjydh_cas);
    if(userJSON){
      this.userCas = JSON.parse(userJSON)
      return this.userCas
    }
    return false
  }
  initAuth(): void {
    if (!sessionStorage.getItem(environment.login.mjydh_cas)) {
      const token: any = this.getAccessTokenFromUrl();
      if (token) {
        this.setToken(token);
        this.verifToken();
      }
    }

  }

  private setToken(token: string): void {
    localStorage.setItem(environment.login.mjydh_token, token);
  }
  /**
   * Retorna token del CAS
   * @returns
   */
  private getToken(): string | null {
    return localStorage.getItem(environment.login.mjydh_token);
  }

  /**
   * Consulta al Backen por el toquen y setea las cerdenciales
   * @param code
   */
  private verifToken(): void {
    this.validateToken(this.getToken()).subscribe((data: any) => {
      this.setUser(data.user.userCas);
      sessionStorage.setItem(environment.login.mjydh_jwt, data.token);
    },
      (error: any) => {
        this.logOut();
      });
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

  public getJWT() {
    return sessionStorage.getItem(environment.login.mjydh_jwt);
  }
  
  public refreshToken(): void {
    this.periodic.startPeriodicTask(environment.login.mjydh_refresh, () => {
      (this.getToken()) ? this.verifToken() : ''
    });

  }


  public login() {
    window.location.replace(
      environment.auth.urlaAuth +
      '/service-auth/oauth2.0/authorize?response_type=token&client_id=' +
      environment.auth.clientId +
      '&redirect_uri=' +
      environment.auth.redirectUri
    );
  }
  public logOut() {
    //this.borroCredenciales().subscribe((data) => console.log(data));
    localStorage.removeItem(environment.login.mjydh_token);
    sessionStorage.removeItem(environment.login.mjydh_cas);
    sessionStorage.removeItem(environment.login.mjydh_jwt);
    sessionStorage.setItem(this.MJYDH_REFRESH, '0');

    // const url = `${environment.auth.urlaAuth}/service-auth/${environment.auth.logoutUrl}`
    // localStorage.removeItem('MJYDH_JWT')
    // localStorage.removeItem('MJYDH_CAS')
    // window.location.href =url

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

  private borroCredenciales() {
    console.log(this.urlLogout);
    const headers = new HttpHeaders({
      Accept: '*/*',
      'X-Requested-With': 'XMLHttpRequest',
    });
    const options = { headers: headers };
    return this.http.get(this.urlLogout, options);
  }

}

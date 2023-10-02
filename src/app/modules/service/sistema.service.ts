import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endPoint } from 'src/environments/endPoint'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SISTEMAS } from 'src/app/core/interfaces/sistemas.interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  sistemas = environment.mjydhWeb + endPoint.sistemas;

  contactos : any

  private dataSistema = new BehaviorSubject<any>(null)

  data$ = this.dataSistema.asObservable()

  constructor(private http : HttpClient) { }

  getSistemas(): Observable<SISTEMAS[]>{
    return this.http.get<SISTEMAS[]>(this.sistemas)
  }

  setIdSistema(value : any){
     this.dataSistema.next(value)
  }

}

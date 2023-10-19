import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SISTEMAS } from 'src/app/core/interfaces/sistemas.interface';
import { Ministerio } from 'src/app/core/interfaces/ministerio.interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  sistemas = environment.baseUrl+environment.api.sistemas

  contactos : any

  private dataSistema = new BehaviorSubject<any>(null)
  
  data$ = this.dataSistema.asObservable()

  constructor(private http : HttpClient) { }

  getSistemas(): Observable<SISTEMAS[]>{
    return this.http.get<SISTEMAS[]>(this.sistemas)
  }

  getMinisterio(): Observable<Ministerio>{
     const ministerio = environment.ministerio
     return this.http.get<Ministerio>(ministerio)
  } 

  setIdSistema(value : any){
     this.dataSistema.next(value)
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISistemas} from 'src/app/core/interfaces/sistemas.interface';
import { IMinisterio } from 'src/app/core/interfaces/ministerio.interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  sistemas = environment.baseUrl+environment.api.sistemas

  contactos : any

  private dataSistema = new BehaviorSubject<any>(null)

  data$ = this.dataSistema.asObservable()

  constructor(private http : HttpClient) { }

  getSistemas(): Observable<ISistemas[]>{
    return this.http.get<ISistemas[]>(this.sistemas)
  }

  getMinisterio(): Observable<IMinisterio>{
     const ministerio = environment.ministerio
     return this.http.get<IMinisterio>(ministerio)
  }

  setIdSistema(value : any){
     this.dataSistema.next(value)
  }

}

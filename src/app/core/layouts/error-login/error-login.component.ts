import { Component } from '@angular/core';
import { ErrorInterceptorService } from '../../interceptor/error-interceptor.service';

@Component({
  selector: 'app-error-login',
  templateUrl: './error-login.component.html',
  styleUrls: ['./error-login.component.scss']
})
export class ErrorLoginComponent {
  constructor(protected unauthorized : ErrorInterceptorService){}

  error : boolean= false
  
  ngOnInit(): void {
    this.unauthorized.$unauthorized.subscribe(error=>{
      if(error){
        this.error = true
      }else{
        this.error = false
      }
    })
  }
}

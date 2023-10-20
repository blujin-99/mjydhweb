import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedGuard } from './guard/logged.guard';
import { ListaSistemasComponent } from './modules/sistemas/pages/lista-sistemas/lista-sistemas.component';

const routes: Routes = [

   { // canActivate: [loggedGuard],
     path:'inicio', component:ListaSistemasComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
 
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedGuard } from './guard/logged.guard';
import { ListaSistemasComponent } from './modules/sistemas/pages/lista-sistemas/lista-sistemas.component';
import { BandejaNotificacionesComponent } from './modules/bandeja-notificaciones/pages/bandeja-notificaciones.component';

const routes: Routes = [

  {
     path: 'inicio', component: ListaSistemasComponent 
  },
  {
    canActivate: [loggedGuard],
    path: 'notificaciones',
    component:BandejaNotificacionesComponent
     
   },
   { 
    path: '**', redirectTo: 'inicio', pathMatch: 'full'
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

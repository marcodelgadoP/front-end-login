import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio',component:DashboardComponent},
  {path: 'iniciar-sesion', component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

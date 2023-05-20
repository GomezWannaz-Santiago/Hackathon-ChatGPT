import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarCorreoComponent } from './ValidarCorreo/ValidarCorreo.component';
import {PasswordSegurityComponent} from './PasswordSecurity/PasswordSegurity.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'validarCorreo',
        component: ValidarCorreoComponent
      },
      {
        path: 'password',
        component : PasswordSegurityComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
    
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordSegurityComponent } from './PasswordSecurity/PasswordSegurity.component';
import { ValidarCorreoComponent } from './ValidarCorreo/ValidarCorreo.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordSegurityComponent,
    ValidarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

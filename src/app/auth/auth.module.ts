import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule
  ]
})
export class AuthModule { }

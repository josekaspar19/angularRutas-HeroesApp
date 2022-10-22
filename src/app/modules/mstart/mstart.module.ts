import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './pages/start/start.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { MstartRoutingModule } from './mstart-routing.module';



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    MstartRoutingModule,
    PrimeNgModule
  ]
})
export class MstartModule { }

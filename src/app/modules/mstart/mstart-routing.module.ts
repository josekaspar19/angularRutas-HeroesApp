import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
{
  path: '',
  children: [
    {
      path: 'start',
      component: StartComponent
    },
    {
      path: '**',
      redirectTo: 'start'
    }
  ]
}
]



@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class MstartRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherComponent } from './voucher/voucher.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
  path: 'voucher',
  component: VoucherComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
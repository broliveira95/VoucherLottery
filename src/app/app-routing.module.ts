import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherComponent } from './voucher/voucher.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
  path: 'voucher',
  component: VoucherComponent
},
{
  path: 'error',
  component: ErrorComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherComponent } from './voucher/voucher.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'voucher',
    component: VoucherComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
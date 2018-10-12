import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherComponent } from '@app/voucher/voucher.component';

const routes: Routes = [{
  path: 'oucher',
  component: VoucherComponent,                       
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
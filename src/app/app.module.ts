import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoucherService } from '@app/voucher/voucher.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from '@app/local-storage.service';
import { VoucherComponent } from './voucher/voucher.component';
import { SetLoginService } from './login/setLogin.service';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [VoucherService, LocalStorageService, SetLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

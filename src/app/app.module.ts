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
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [VoucherService, LocalStorageService, SetLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

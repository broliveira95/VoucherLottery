import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoucherState } from '@app/voucher/voucher.state';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  private URL = environment.voucherURL

  constructor(private http: HttpClient) {  }

  getVoucher(): Observable<VoucherState> {
    return this.http.get<VoucherState>(this.URL)
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoucherState, VoucherDetail } from '@app/voucher/voucher.state';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  private voucherURL = 'https://inngagebeapipresalesv2.azurewebsites.net/oData/VoucherLottery'

  constructor(private http: HttpClient) {  }

  getVoucher(): Observable<VoucherState> {
    return this.http.get<VoucherState>(this.voucherURL)
  }

}
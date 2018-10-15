import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VoucherState } from '@app/voucher/voucher.state';
import { ObjectLogin } from './login.object';
import { Observable } from 'rxjs';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class SetLoginService {

    url = 'https://inngagebeapipresalesv2.azurewebsites.net/oData/VoucherLotteryEmail';

    constructor(private http: HttpClient) { }

    addEmail(email: ObjectLogin): Observable<VoucherState> {
        return this.http.post<VoucherState>(this.url, email, httpOptions);
        }
}
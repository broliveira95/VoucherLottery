import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    addEmail(email: string): Observable<VoucherState> {

        const loginData = Object.assign(new ObjectLogin(), {
            Input: { Email: email },
            UserData: {
              UserType: 5,
              AppVersion: "1",
              LanguageID: 1,
              AppID: "tech.innowave.gaminn.mkt.vvl"
            }
          });
    
        return this.http.post<VoucherState>(this.url, loginData, httpOptions);
        }
}
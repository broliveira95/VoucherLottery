import {Injectable} from '@angular/core';
import {VoucherDetail } from '@app/voucher/voucher.state';


@Injectable()

export class LocalStorageService {

    private voucherKey = 'voucherKey';

    constructor(){}

    setLocalStorage(serviceResponse: VoucherDetail) {
        window.localStorage.setItem(this.voucherKey,  JSON.stringify(serviceResponse));
    }
    
    getLocalStorage() {
        return JSON.parse(window.localStorage.getItem(this.voucherKey))
    }

    seeIfLocalStorage(): Boolean {
        if (window.localStorage.key(0) === this.voucherKey){
            return true;
        }
        else return false;
    }
}
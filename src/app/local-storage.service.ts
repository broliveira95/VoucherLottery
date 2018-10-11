import {Injectable} from '@angular/core';
import { VoucherState } from '@app/voucher/voucher.state';


@Injectable()

export class LocalStorageService {

    private voucherKey = 'voucherKey';

    constructor(){}

    setLocalStorage(serviceResponse: VoucherState[]) {
        window.localStorage.setItem(this.voucherKey,  JSON.stringify(serviceResponse));
        window.localStorage.setItem('ppppppppp', "dfhkfdhkguk")
    }
    
    getLocalStorage() {
        return JSON.parse(window.localStorage.getItem(this.voucherKey))
    }

    seeIfLocalStorage(): Boolean {
        if (window.localStorage.key(1) === this.voucherKey){
            return true;
        }
        else return false;
    }
}
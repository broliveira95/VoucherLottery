import { Component, OnInit } from '@angular/core';
import { VoucherService } from '@app/voucher/voucher.service';
import { LocalStorageService } from '@app/local-storage.service';
import { VoucherState } from '@app/voucher/voucher.state';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  dataToShow$: any;

  constructor(private voucherService: VoucherService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    if (!this.localStorageService.seeIfLocalStorage() || this.localStorageService.getLocalStorage() === null) {
      this.voucherService.getVoucher().subscribe(data => { 
        console.log('response:', data);
        this.dataToShow$ = data.VoucherDetail;
        this.localStorageService.setLocalStorage(this.dataToShow$); });

    }
    else {
      this.dataToShow$ = this.localStorageService.getLocalStorage();
      console.log(this.dataToShow$)
    }
  }

}


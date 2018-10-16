import { Component, OnInit } from '@angular/core';
import { VoucherService } from '@app/voucher/voucher.service';
import { LocalStorageService } from '@app/local-storage.service';
import { environment } from '@env/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  dataToShow$: any;
  logoToShow: boolean = environment.showLogin;
  code: number;


  constructor(private voucherService: VoucherService, private localStorageService: LocalStorageService, private route: Router) { }

  ngOnInit() {

    if (!this.localStorageService.seeIfLocalStorage() || this.localStorageService.getLocalStorage() === null) {
      this.voucherService.getVoucher().subscribe(data => {
        console.log('response:', data);
        this.code = data.Code;
        if (this.code === 0) {
          this.dataToShow$ = data.VoucherDetail;
          this.localStorageService.setLocalStorage(this.dataToShow$);
        }
        else {
          this.route.navigate(['error']);
          console.log("error");
        }
      },
      err => {
        console.log("error: ", err);
          this.route.navigate(["error"]);
        }
      );

    }
    else {
      this.dataToShow$ = this.localStorageService.getLocalStorage();
      console.log('aqui');
    }
  }

}


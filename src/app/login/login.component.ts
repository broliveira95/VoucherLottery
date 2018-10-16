import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { SetLoginService } from './setLogin.service';
import { LocalStorageService } from '@app/local-storage.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private route: Router, private setLoginService: SetLoginService, private localStorageService: LocalStorageService) { }

  newEmail: string = '';
  check: boolean = false;
  showMessage: Boolean = false;
  emailUsed: Boolean = false;

  ngOnInit() {
    if (!environment.showLogin) {
      console.log("error")
      this.route.navigate(['voucher']);
    }
  }
  submitEmail() {
    if (this.check && this.newEmail !== "") {
      this.showMessage = false;
      console.log(this.newEmail);

      this.setLoginService.addEmail(this.newEmail).subscribe(data => {
        console.log('response:', data)
        if (data.Code === 0) {
          if (data.VoucherDetail.Description === null) {
            this.emailUsed = true;
          }
          else {
          this.localStorageService.setLocalStorage(data.VoucherDetail);
          this.route.navigate(['voucher']);
        }
        }
        else {
          this.route.navigate(['error']);
          console.log("error");
        }
      }, err => {
        this.route.navigate(["error"]);
      }
      );
    }
    else {
      this.showMessage = true;
    }
  }

  toggleCheck() {
    this.check = !this.check;
    console.log(this.check);
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { SetLoginService } from './setLogin.service';
import { ObjectLogin } from '@app/login/login.object'
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
      this.route.navigate(['voucher']);
    }
  }

  submitEmail() {
    if (this.check && this.newEmail !== "") {
      this.showMessage = false;
      console.log(this.newEmail);

      const loginData = Object.assign(new ObjectLogin(), {
        Input: { Email: this.newEmail },
        UserData: {
          UserType: 5,
          AppVersion: "1",
          LanguageID: 1,
          AppID: "tech.innowave.gaminn.mkt.vvl"
        }
      });

      console.log(loginData)

      this.setLoginService.addEmail(loginData).subscribe(data => {
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


import { Component, OnInit } from '@angular/core';
import { ToastMessage } from 'src/app/utils/toast';
import { ApiService } from 'src/app/providers/api.service';
import { UserService } from 'src/app/providers/user.service';
import { ERRORS } from 'src/app/constants/Const';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginCred = {
    userName: !environment.production ? 'pa_amitk2' : undefined,
    password: !environment.production ? 'Feb@2019' : undefined
  }

  constructor(public api: ApiService, public userCtrl: UserService, private router: Router) {
    console.log("LoginPage")
  }

  ngOnInit() {
  }

  async onPressLogin() {

    if (!this.loginCred.userName) {
      ToastMessage.warn("Please enter your valid Username");
      return
    }

    if (!this.loginCred.userName) {
      ToastMessage.warn("Please enter your valid Password");
      return
    }


    try {
      let response = await this.api.doLogin(this.loginCred.userName, this.loginCred.password);
      if (response.Is_UserValid == false) {
        ToastMessage.warn(response.CustomMessage || ERRORS.LOGIN);

        return
      }

      if (response.Is_UserValid == true) {
        // $state.go('app.home');

        this.router.navigate(['/dashboard', {}]);

        this.userCtrl.user.UserId = response.User_ID;
        this.userCtrl.user.User_Name = response.EmployeeName;
        this.userCtrl.user.User_Mobile_Number = response.Register_Mobile_No;

        return
      }

    } catch (errorMessage) {
      // Show Error
      ToastMessage.warn(errorMessage || ERRORS.GENERIC)

    }





  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { LoginService } from './login.service';
import { UtilityService } from 'src/app/Utilities/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  componentIsAlive: boolean;
  loading: boolean;
  isNotificationMessage: boolean;
  constructor(
    private formBuilder: FormBuilder, private route: Router,
    private loginService: LoginService, private utilityService: UtilityService) {
     // create signup form
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(6), Validators.required]]
    });
    this.componentIsAlive = true;
  }

  login() {
    this.loading = true;
    const { email, password } = this.loginForm.value;
    this.loginService.loginWithEmailAndPassword(email, password);
    this.loginService.loginResponse$.pipe( takeWhile( () => this.componentIsAlive)).subscribe(response => {
      if (response) {
        this.loading = false;
        if (response.responseType === 'success') {
          // this.utilityService.updateNotification('Account created successfully', 'success');
          this.isNotificationMessage = true;
          this.loginForm.reset();
          this.route.navigateByUrl('/films');
        }
        if (response.responseType === 'error') {
          this.utilityService.updateNotification(response.response.message, 'danger');
          this.isNotificationMessage = true;
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.componentIsAlive = false;
  }

}

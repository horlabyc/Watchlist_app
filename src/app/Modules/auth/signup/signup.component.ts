import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { SignupService } from './signup.service';
import { takeWhile } from 'rxjs/operators';
import { UtilityService } from 'src/app/Utilities/utility.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  componentIsAlive: boolean;
  isNotificationMessage: boolean;
  loading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignupService,
    private utilityService: UtilityService, private route: Router
    ) {
    // create signup form
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(6), Validators.required]]
    });
    this.componentIsAlive = true;
  }

  signUp() {
    this.isNotificationMessage = false;
    this.loading = true;
    const { email, password } = this.signupForm.value;
    this.signUpService.signUpWithEmailAndPassword(email, password);
    this.signUpService.signUpResponse$.pipe( takeWhile( () => this.componentIsAlive )).subscribe(response => {
      if (response) {
        this.loading = false;
        console.log(response);
        if (response.responseType === 'success') {
          this.utilityService.updateNotification('Account created successfully', 'success');
          this.isNotificationMessage = true;
          this.signupForm.reset();
          this.route.navigateByUrl('/films');
        }
        if (response.responseType === 'error' ) {
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

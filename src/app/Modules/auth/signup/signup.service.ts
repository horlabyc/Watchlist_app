import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from 'src/app/Utilities/utility.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public signUpResponse = new BehaviorSubject(null);
  public signUpResponse$ = this.signUpResponse.asObservable();

  constructor(private afAuth: AngularFireAuth, private notificationService: UtilityService) { }

  async signUpWithEmailAndPassword(email: string, password: string) {
    try {
      const signup = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.signUpResponse.next({response: signup, responseType: 'success'});
    } catch (error) {
      this.signUpResponse.next({response: error, responseType: 'error'});
    }
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from 'src/app/Utilities/utility.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginResponse = new BehaviorSubject(null);
  public loginResponse$ = this.loginResponse.asObservable();

  constructor(private afAuth: AngularFireAuth, private notificationService: UtilityService, private route: Router) { }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      const login = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(login);
      this.loginResponse.next({ response: login, responseType: 'success'});
    } catch (error) {
      this.loginResponse.next({ response: error, responseType: 'error'});
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.route.navigateByUrl('');
    // window.location.reload();
  }
}

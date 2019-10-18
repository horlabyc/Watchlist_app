import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public notification = new BehaviorSubject(null);
  public notification$ = this.notification.asObservable();

  constructor() { }

  updateNotification(message: string, type: string) {
    this.notification.next({
      message, type
    });
  }
}

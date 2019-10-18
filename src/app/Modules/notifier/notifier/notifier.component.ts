import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/app/Utilities/utility.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit, OnDestroy {
  notificationMessage: string;
  componentIsAlive: boolean;
  alertType: string;
  constructor( private notificationServ: UtilityService) {
    this.componentIsAlive = true;
  }

  ngOnInit() {
    console.log(this.alertType);
    this.notificationServ.notification$.pipe( takeWhile( () => this.componentIsAlive )).subscribe(message => {
      if (message) {
        console.log(message);
        this.notificationMessage = message.message;
        this.alertType = message.type;
      }
    })
  }

  ngOnDestroy() {
    this.componentIsAlive = false;
  }
}

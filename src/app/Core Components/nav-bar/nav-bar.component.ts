import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/Modules/auth/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  displayMenu: boolean;
  @Input () isLoggedIn: boolean;

  constructor(private logService: LoginService) {
    this.displayMenu = false;
  }

  logout() {
    this.logService.logout();
  }

  ngOnInit() {

  }

}

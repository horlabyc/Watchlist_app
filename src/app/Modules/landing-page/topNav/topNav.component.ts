import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() navItems: [];
  constructor() { }

  ngOnInit() {
  }

}

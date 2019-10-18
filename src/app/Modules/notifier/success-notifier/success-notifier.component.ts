import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-notifier',
  templateUrl: './success-notifier.component.html',
  styleUrls: ['./success-notifier.component.scss']
})
export class SuccessNotifierComponent implements OnInit {
  @Input() successMessage: string;
  constructor() { }

  ngOnInit() {
  }

}

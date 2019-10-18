import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotifierComponent } from './success-notifier/success-notifier.component';
import { NotifierComponent } from './notifier/notifier.component';


@NgModule({
  declarations: [SuccessNotifierComponent, NotifierComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessNotifierComponent, NotifierComponent
  ]
})
export class NotifierModule { }

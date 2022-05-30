import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { RouterModule } from '@angular/router';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    PagerComponent,
    ErrorAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PagerComponent,
    ErrorAlertComponent,
    RouterModule,
    SuccessAlertComponent
  ]
})
export class SharedModule { }

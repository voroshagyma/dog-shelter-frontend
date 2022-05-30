import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagerComponent,
    ErrorAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PagerComponent,
    ErrorAlertComponent,
    RouterModule
  ]
})
export class SharedModule { }

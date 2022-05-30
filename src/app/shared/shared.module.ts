import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';



@NgModule({
  declarations: [
    PagerComponent,
    ErrorAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagerComponent,
    ErrorAlertComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogPageComponent } from './dog-page/dog-page.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogListComponent } from './dog-list/dog-list.component';

@NgModule({
  declarations: [
    DogPageComponent,
    DogCardComponent,
    DogListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [DogListComponent]
})
export class DogsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogPageComponent } from './dog-page/dog-page.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SharedModule } from '../shared/shared.module';
import { DogsSearchFormComponent } from './dogs-search-form/dogs-search-form.component';

@NgModule({
  declarations: [
    DogPageComponent,
    DogCardComponent,
    DogListComponent,
    DogsSearchFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DogListComponent]
})
export class DogsModule { }

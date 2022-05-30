import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogPageComponent } from './dog-page/dog-page.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SharedModule } from '../shared/shared.module';
import { DogsSearchFormComponent } from './dogs-search-form/dogs-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DogEditPageComponent } from './dog-edit-page/dog-edit-page.component';
import { DogAddPageComponent } from './dog-add-page/dog-add-page.component';
@NgModule({
  declarations: [
    DogPageComponent,
    DogCardComponent,
    DogListComponent,
    DogsSearchFormComponent,
    DogEditPageComponent,
    DogAddPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [DogListComponent]
})
export class DogsModule { }

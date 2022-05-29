import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogPageComponent } from './dogs/dog-page/dog-page.component';

const routes: Routes = [
  {
    path: "",
    component: DogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

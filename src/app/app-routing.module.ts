import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogPageComponent } from './dogs/dog-page/dog-page.component';
import { LoginPageComponent } from './users/login-page/login-page.component';

const routes: Routes = [
  {
    path: "",
    component: DogPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

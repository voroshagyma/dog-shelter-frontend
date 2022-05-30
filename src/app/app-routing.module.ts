import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogAddPageComponent } from './dogs/dog-add-page/dog-add-page.component';
import { DogEditPageComponent } from './dogs/dog-edit-page/dog-edit-page.component';
import { DogPageComponent } from './dogs/dog-page/dog-page.component';
import { IsAuthenticatedGuard } from './shared/is-authenticated.guard';
import { LoginPageComponent } from './users/login-page/login-page.component';

const routes: Routes = [
  {
    path: "",
    component: DogPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "dogs/add",
    component: DogAddPageComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: "dogs/edit/:id",
    component: DogEditPageComponent,
    canActivate: [IsAuthenticatedGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

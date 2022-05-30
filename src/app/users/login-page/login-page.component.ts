import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private readonly usersService: UsersService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  loginErrorMessage: string = "";

  handleSubmit() {

    this.usersService.login(this.loginForm.value)
      .subscribe(
        e => this.router.navigate(["/"]),
        error => {
          this.loginErrorMessage = "Login failed. Please check your credentials!";
          setTimeout(() => this.loginErrorMessage = "", 2000);
        }
      );

  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

}

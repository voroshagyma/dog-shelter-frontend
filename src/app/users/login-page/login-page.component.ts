import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
  }

  handleSubmit() {

    this.usersService.login(this.loginForm.value)
      .subscribe(
        e => { console.log("user ok", e); },
        error => console.log("user err", error)
      );

  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

}

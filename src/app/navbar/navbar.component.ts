import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../users/models/iuser';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  user: IUser | null = null;

  @Output()
  onLogout: EventEmitter<void> = new EventEmitter();

  logout() {
    this.onLogout.emit();
  }

}

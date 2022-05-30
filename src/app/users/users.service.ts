import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IUser } from './models/iuser';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  @Output()
  onUserChanged: EventEmitter<IUser | null> = new EventEmitter();

  user: IUser | null = null;

  login(user: IUser) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<IUser>(`${environment.apiUrl}/auth/login`,
      JSON.stringify(user),
      httpOptions
    )
      .pipe(
        tap(e => {
          this.user = e;
          this.onUserChanged.emit(this.user);
        })
      );
  }

  logout() {
    this.user = null;
    this.onUserChanged.emit(this.user);
  }

}

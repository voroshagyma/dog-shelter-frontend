import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './models/iuser';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  $user: Observable<IUser> | null = null

  login(user: IUser) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const result = this.http.post<IUser>(`${environment.apiUrl}/auth/login`,
      JSON.stringify(user),
      httpOptions
    );

    this.$user = result;

    return result;
  }

  logout() { }

}

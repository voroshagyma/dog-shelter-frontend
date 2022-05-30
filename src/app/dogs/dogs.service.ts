import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDog } from './models/idog';


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private readonly http: HttpClient) {
  }

  private readonly route = "/dogs"

  create() { }

  findAll() {
    return this.http.get<IDog[]>(environment.apiUrl + this.route);
  }

  findOne(id: number) {
    return this.http.get<IDog>(environment.apiUrl + this.route + `/${id}`).pipe(tap(e => {
      e.foundAt = new Date(e.foundAt);
      if (e.adoptedAt) {
        e.adoptedAt = new Date(e.adoptedAt);
      }
    }));
  }

  update() { }

  remove() { }
}

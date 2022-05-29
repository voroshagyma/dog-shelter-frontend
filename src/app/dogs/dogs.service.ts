import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private readonly http: HttpClient) {
  }

  private readonly route = "/dogs"

  create() { }

  findAll() {
    return this.http.get(environment.apiUrl + this.route);
  }

  findOne() { }

  update() { }

  remove() { }
}

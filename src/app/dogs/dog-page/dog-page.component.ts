import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.scss']
})
export class DogPageComponent implements OnInit {

  constructor(private readonly dogService: DogsService) { }

  dogs: IDog[] = [];

  ngOnInit(): void {
    this.dogService.findAll().subscribe(dogs => this.dogs = dogs.slice(0, 20));
  }

}

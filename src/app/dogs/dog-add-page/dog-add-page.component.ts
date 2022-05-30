import { Component, OnInit } from '@angular/core';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-add-page',
  templateUrl: './dog-add-page.component.html',
  styleUrls: ['./dog-add-page.component.scss']
})
export class DogAddPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dog: IDog = {
    age: 0,
    breed: "",
    description: "",
    foundAt: new Date(),
    name: "",
    adoptedAt: null,
    picture: ""
  };


  addDog(dog: IDog) {
    console.log("adding", dog);
  }
}

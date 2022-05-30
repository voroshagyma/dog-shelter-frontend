import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-add-page',
  templateUrl: './dog-add-page.component.html',
  styleUrls: ['./dog-add-page.component.scss']
})
export class DogAddPageComponent implements OnInit {

  constructor(private readonly dogsService: DogsService) { }

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
  successEdigMsg: string = "";

  addDog(dog: IDog) {
    this.dogsService.create(dog).subscribe(e => {
      this.successEdigMsg = "Dog successfully saved!";
      setTimeout(() => this.successEdigMsg = "", 2000);
    });
  }
}

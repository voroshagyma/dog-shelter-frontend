import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['dogs']) {

      const dogs = changes['dogs'].currentValue as IDog[];

      this.dogsToDogMatrix(dogs);
    }

  }

  @Input()
  dogs: IDog[] = [];

  dogsMatrix: IDog[][] = [];

  private dogsToDogMatrix(dogs: IDog[]) {
    const matrix = [];
    const dogsCopy = dogs.slice();
    while (dogsCopy.length) {
      matrix.push(dogsCopy.splice(0, 4));
    }

    this.dogsMatrix = matrix;

    console.log(this.dogsMatrix);
  }
}

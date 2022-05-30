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

  currentPage: number = 0;
  pageSize = 20;

  dogs: IDog[] = [];

  slicedDogs: IDog[] = [];

  ngOnInit(): void {
    this.dogService.findAll().subscribe(dogs => {
      this.dogs = dogs;
      this.sliceDogs();
    });
  }

  handleNext(value: number) {
    this.currentPage = value;
    this.sliceDogs();
  }

  handlePrevious(value: number) {
    this.currentPage = value;
    this.sliceDogs();
  }

  private sliceDogs() {
    const startIndex = this.currentPage * this.pageSize + this.currentPage;
    const endIndex = startIndex + this.pageSize;
    this.slicedDogs = this.dogs.slice(startIndex, endIndex);
  }

}

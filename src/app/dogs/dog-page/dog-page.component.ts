import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/users/models/iuser';
import { UsersService } from 'src/app/users/users.service';
import { DogsService } from '../dogs.service';
import { IDog } from '../models/idog';
import { IDogSearch } from '../models/idog-search';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.scss']
})
export class DogPageComponent implements OnInit {

  constructor(private readonly dogService: DogsService, private readonly usersService: UsersService) { }

  currentPage: number = 0;
  pageSize = 20;

  dogs: IDog[] = [];
  dogsFiltered: IDog[] = [];
  dogsToDisplay: IDog[] = [];

  searchTerm: IDogSearch = {
    age: -1,
    breed: "",
    name: ""
  };

  user: IUser | null = null;

  ngOnInit(): void {

    this.usersService.$user?.subscribe(e => this.user = e);

    this.dogService.findAll().subscribe(dogs => {
      this.dogs = dogs;
      this.calculateDogsToDisplay();
    });
  }

  private calculateDogsToDisplay() {
    this.dogsFiltered = this.filterDogs(this.dogs, this.searchTerm);
    this.dogsToDisplay = this.sliceDogs(this.dogsFiltered);
  }

  private filterDogs(dogs: IDog[], term: IDogSearch) {
    let dogsCopy = dogs.slice();

    if (!isNaN(parseInt(term.age + "")) && (term.age > -1)) {
      dogsCopy = dogsCopy.filter(dog => dog.age === term.age);
    }

    if (term.name) {
      dogsCopy = dogsCopy.filter(dog =>
        dog.name.toLowerCase().includes(term.name.toLowerCase())
      );
    }

    if (term.breed) {
      dogsCopy = dogsCopy.filter(dog =>
        dog.breed.toLowerCase().includes(term.breed.toLowerCase())
      );
    }

    return dogsCopy;
  }

  handleNext(value: number) {
    this.currentPage = value;
    this.calculateDogsToDisplay();
  }

  handlePrevious(value: number) {
    this.currentPage = value;
    this.calculateDogsToDisplay();
  }

  private sliceDogs(dogs: IDog[]) {
    const startIndex = this.currentPage * this.pageSize + this.currentPage;
    const endIndex = startIndex + this.pageSize;
    return dogs.slice(startIndex, endIndex);
  }


  handleSearch(term: IDogSearch) {
    this.searchTerm = term;
    this.resetPager();
    this.calculateDogsToDisplay();
  }

  private resetPager() {
    this.currentPage = 0;
  }
}

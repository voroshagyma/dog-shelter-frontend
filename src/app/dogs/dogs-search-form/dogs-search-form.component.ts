import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dogs-search-form',
  templateUrl: './dogs-search-form.component.html',
  styleUrls: ['./dogs-search-form.component.scss']
})
export class DogsSearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.searchForm.value);
  }

  searchForm = new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    age: new FormControl('', Validators.min(0)),
  });
}

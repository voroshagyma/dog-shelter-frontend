import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDogSearch } from '../models/idog-search';

@Component({
  selector: 'app-dogs-search-form',
  templateUrl: './dogs-search-form.component.html',
  styleUrls: ['./dogs-search-form.component.scss']
})
export class DogsSearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.onSubmit.emit(this.searchForm.value);
  }

  searchForm = new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    age: new FormControl('', Validators.min(0)),
  });

  @Output()
  onSubmit = new EventEmitter<IDogSearch>();
}

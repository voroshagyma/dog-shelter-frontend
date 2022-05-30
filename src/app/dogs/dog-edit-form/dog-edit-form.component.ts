import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-edit-form',
  templateUrl: './dog-edit-form.component.html',
  styleUrls: ['./dog-edit-form.component.scss']
})
export class DogEditFormComponent implements OnInit {

  constructor() { }

  @Input()
  dog: IDog | null = null;

  @Output()
  onSubmit: EventEmitter<IDog> = new EventEmitter();


  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes);

    const dog = changes['dog'].currentValue;

    if (dog) {
      this.editForm.get('name')?.setValue(dog.name);
      this.editForm.get('age')?.setValue(dog.age);
      this.editForm.get('breed')?.setValue(dog.breed);
      this.editForm.get('foundAt')?.setValue(formatDate(dog.foundAt, 'yyyy-MM-dd', 'en'));

      const adoptedAt = dog.adoptedAt;
      if (adoptedAt) {
        this.editForm.get('adoptedAt')?.setValue(formatDate(adoptedAt, 'yyyy-MM-dd', 'en'));
      }
    }

  }

  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    age: new FormControl('', Validators.min(0)),
    foundAt: new FormControl('', Validators.required),
    adoptedAt: new FormControl(''),
  });

  handleSubmit() {
    this.onSubmit.emit(this.editForm.value);
  }
}

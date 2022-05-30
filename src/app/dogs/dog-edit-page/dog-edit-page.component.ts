import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DogsService } from '../dogs.service';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-edit-page',
  templateUrl: './dog-edit-page.component.html',
  styleUrls: ['./dog-edit-page.component.scss']
})
export class DogEditPageComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private readonly dogsService: DogsService, private readonly router: Router) { }

  ngOnInit(): void {
    console.log(this.route.paramMap.subscribe(e => this.getDog(parseInt(e.get("id") || ""))));
  }


  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    age: new FormControl('', Validators.min(0)),
    foundAt: new FormControl('', Validators.required),
    adoptedAt: new FormControl(''),
  });

  private originalDog: IDog | null = null;

  successEdigMsg: string = "";

  deleteDog() {
    this.dogsService.remove(this.originalDog?.id || -1).subscribe(e => this.router.navigate(["/"]));
  }

  getDog(id: number) {
    this.dogsService.findOne(id)
      .subscribe(
        e => {
          this.originalDog = e;
          this.editForm.get('name')?.setValue(e.name);
          this.editForm.get('age')?.setValue(e.age);
          this.editForm.get('breed')?.setValue(e.breed);
          this.editForm.get('foundAt')?.setValue(formatDate(e.foundAt, 'yyyy-MM-dd', 'en'));

          const adoptedAt = e.adoptedAt;
          if (adoptedAt) {
            this.editForm.get('adoptedAt')?.setValue(formatDate(adoptedAt, 'yyyy-MM-dd', 'en'));
          }
        },
        err => console.log("err", err)
      );
  }

  handleSubmit() {
    this.dogsService.update(this.originalDog?.id || -1, this.editForm.value).subscribe(e => {
      this.successEdigMsg = "Dog successfully edited!";
      setTimeout(() => this.successEdigMsg = "", 2000);
    });
  }

}

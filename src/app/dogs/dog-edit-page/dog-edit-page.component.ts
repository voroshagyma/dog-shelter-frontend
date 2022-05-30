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
    this.route.paramMap.subscribe(e => this.getDog(parseInt(e.get("id") || "")));
  }

  originalDog: IDog | null = null;

  successEdigMsg: string = "";

  deleteDog() {
    this.dogsService.remove(this.originalDog?.id || -1).subscribe(e => this.router.navigate(["/"]));
  }

  getDog(id: number) {
    this.dogsService.findOne(id)
      .subscribe(
        e => {
          this.originalDog = e;
        },
        err => console.log("err", err)
      );
  }

  handleSubmit(dog: IDog) {

    this.dogsService.update(this.originalDog?.id || -1, dog).subscribe(e => {
      this.successEdigMsg = "Dog successfully edited!";
      setTimeout(() => this.successEdigMsg = "", 2000);
    });
  }

}

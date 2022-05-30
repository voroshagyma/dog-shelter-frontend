import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-edit-page',
  templateUrl: './dog-edit-page.component.html',
  styleUrls: ['./dog-edit-page.component.scss']
})
export class DogEditPageComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private readonly dogsService: DogsService) { }

  ngOnInit(): void {
    console.log(this.route.paramMap.subscribe(e => this.getDog(parseInt(e.get("id") || ""))));
  }

  getDog(id: number) {
    this.dogsService.findOne(id)
      .subscribe(
        e => console.log("dog", e),
        err => console.log("err", err)
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.scss']
})
export class DogPageComponent implements OnInit {

  constructor(private readonly dogService: DogsService) { }



  ngOnInit(): void {
    this.dogService.findAll().subscribe(dogs => console.log(dogs));
  }

}

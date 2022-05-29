import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  dogs: IDog[] = [];

}

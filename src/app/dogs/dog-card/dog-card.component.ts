import { Component, Input, OnInit } from '@angular/core';
import { IDog } from '../models/idog';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  dog?: IDog;

  @Input()
  hasControls: boolean = false;
}

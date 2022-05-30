import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  currentPage: number = 0;

  @Input()
  list: any[] = [];

  @Input()
  pageSize: number = 1;

  @Input()
  totalNumOfItems: number = 0;

  @Output()
  onPrevious = new EventEmitter<number>();

  @Output()
  onNext = new EventEmitter<number>();

  get numOfPages() {
    return Math.ceil(this.totalNumOfItems / this.pageSize - 1);
  }

  handlePrevious() {

    if (this.currentPage === 0) {
      return;
    }

    this.currentPage = this.currentPage - 1;
    this.onPrevious.emit(this.currentPage);
  }

  handleNext() {

    if (this.currentPage === this.numOfPages) {
      return;
    }

    this.currentPage = this.currentPage + 1;
    this.onNext.emit(this.currentPage);
  }

}

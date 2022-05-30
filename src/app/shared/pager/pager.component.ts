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

  currentPage: number = 0;

  @Input()
  list: any[] = [];

  @Input()
  pageSize: number = 1;

  @Output()
  onPrevious = new EventEmitter<number>();

  @Output()
  onNext = new EventEmitter<number>();

  handlePrevious() {

    if (this.currentPage === 0) {
      return;
    }

    this.currentPage = this.currentPage - 1;
    this.onPrevious.emit(this.currentPage);
  }

  handleNext() {

    const maxIndex = Math.ceil(this.list.length / this.pageSize - 1);

    if (this.currentPage === maxIndex) {
      return;
    }

    this.currentPage = this.currentPage + 1;
    this.onNext.emit(this.currentPage);
  }

}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {


  @Input() itemsCount = 0;
  @Input() pageSize = 0;
  pagesCount = 0;
  @Input() currentPage = 0;
  @Output() changePage: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.pagesCount = Math.ceil(this.itemsCount / this.pageSize);
  }

  pagesLoop(): number[] {
    return new Array(this.pagesCount);
  }

  showPage(page: number) {
    if (this.currentPage < 3) {
      return page < 4;
    } else {
      return page < this.currentPage + 2 && page >= this.currentPage - 1;
    }
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.changePage.emit(page);
  }

}

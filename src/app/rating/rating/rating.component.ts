import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  dataSource;
  displayedColumns = ['login', 'faculty', 'user', 'rating'];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.get('/vsu/rating/all').subscribe(res => this.dataSource = res);
  }

}

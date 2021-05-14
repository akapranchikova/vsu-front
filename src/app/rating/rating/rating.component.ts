import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rating;
  page = 0;
  displayedColumns = ['login', 'faculty', 'user', 'rating'];
  tourLabels = [
    {
      value: 'JAVA',
      label: 'Java'
    },
    {
      value: 'JS',
      label: 'JS'
    },
    {
      value: 'PYTHON',
      label: 'Python'
    },
  ];
  technology = 'JAVA';

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.loadRating();
  }

  loadRating() {
    this.httpService.get('/vsu/rating', {
      technologyName: this.technology,
      pageSize: 30,
      pageNumber: this.page
    }).subscribe(res => this.rating = res);
  }

  setPage(page) {
    this.page = page;
    this.loadRating();
  }

  getRating(rating) {
    return rating.map(r => `${r.rating}`).join(', ');
  }

}

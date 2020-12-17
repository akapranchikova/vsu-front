import {Component, OnInit} from '@angular/core';
import {DepartmentsService} from './services/departments.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(private departmentsService: DepartmentsService) {
  }

  ngOnInit() {
    this.departmentsService.get().subscribe();
  }

}

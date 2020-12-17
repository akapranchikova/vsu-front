import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  departments;

  constructor(private http: HttpClient) {
  }

  get depart() {
    return this.departments;
  }

  get() {
    return this.http.get('/vsu/departments').pipe(map(res => {
      this.departments = res;
      return res;
    }));
  }
}

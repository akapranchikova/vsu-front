import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<any> {
    return this.http.get('').pipe(map(res => res));
  }

  get() {
    return this.http.get('').pipe(map(res => res));
  }

  add() {
    return this.http.post('', {}).pipe(map(res => res));
  }

  update() {
    return this.http.put('', {}).pipe(map(res => res));
  }

  delete() {
    return this.http.delete('').pipe(map(res => res));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;
  user;
  userSub = new Subject();

  constructor(private http: HttpClient) {
  }

  get getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  getUserObservable() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    }
    if (this.user) {
      return of(this.user);
    } else {
      return this.userSub;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
    this.token = null;
    this.userSub.next(null);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  saveUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.userSub.next(user);
  }

  getUser() {
    this.http.get( '/vsu/user').pipe(map(res => {
      this.saveUser(res);
    })).subscribe();
  }

  signIn(data) {
    return this.http.post('/vsu/sign-in', data).pipe(map(res => {
      // @ts-ignore
      this.saveToken(res.token);
      this.getUser();
      return true;
    }));
  }
}

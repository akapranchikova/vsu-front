import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {element} from 'protractor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user;
  isUpdate: boolean;
  dataSource;
  form: FormGroup;
  displayedColumns = ['login', 'faculty', 'user', 'rating', 'actions'];

  constructor(private authService: AuthService,
              private httpService: HttpService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.authService.getUserObservable().subscribe(res => {
      this.user = res;
      this.form = this.fb.group({...res});
    });

    this.loadTours();

  }

  loadUser() {
    this.authService.updateUserInfo().subscribe(res => {
      this.user = res;
    });
  }

  loadTours() {
    this.httpService.get('vsu/tournament/participant').subscribe(res => {
      this.dataSource = res;
    });
  }

  goToUpdate() {
    this.isUpdate = true;
  }

  save() {
    this.httpService.put('/vsu/user', this.form.getRawValue()).subscribe(res => {
      this.isUpdate = false;
      this.loadUser();
    });
  }

  sendTask(tour) {
    const data = {...tour};
    this.httpService.put(`/vsu/tournament/participant?tournamentId=${tour.tournamentId}&task=${tour.task}`, data)
      .subscribe(res => {
      this.loadTours();
    });
  }

}

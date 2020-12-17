import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user;
  isUpdate: boolean;
  form: FormGroup;

  constructor(private authService: AuthService,
              private httpService: HttpService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.authService.getUserObservable().subscribe(res => {
      this.user = res;
      this.form = this.fb.group({...res});
    });
  }

  loadUser() {
    this.authService.updateUserInfo().subscribe(res => {
      this.user = res;
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

}

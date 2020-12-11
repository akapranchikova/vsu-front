import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserObservable().subscribe(res => {
      this.user = res;
    });
  }

}

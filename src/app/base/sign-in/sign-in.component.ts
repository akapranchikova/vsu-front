import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpService} from '../../services/http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<SignInComponent>,
              public authService: AuthService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  signIn() {
    this.authService.signIn(this.form.getRawValue()).subscribe(res => {

    });
  }

}

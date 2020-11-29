import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {HttpService} from '../../services/http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {SignUpComponent} from '../sign-up/sign-up.component';

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
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  signIn() {
    this.authService.signIn(this.form.getRawValue()).subscribe(res => {
      this.dialogRef.close();
    });
  }


  openRegistration() {
    this.dialogRef.close();
    this.matDialog.open(SignUpComponent, {
      width: '370px',
      autoFocus: false,
    });
  }


}

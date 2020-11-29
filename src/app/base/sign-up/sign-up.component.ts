import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpService} from '../../services/http.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form;
  constructor(public dialogRef: MatDialogRef<SignUpComponent>,
              private httpService: HttpService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  signUp() {
    this.httpService.post('/vsu/register', this.form.getRawValue()).subscribe(res => {
      this.dialogRef.close();
    });
  }

}

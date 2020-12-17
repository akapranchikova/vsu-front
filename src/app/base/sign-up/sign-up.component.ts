import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpService} from '../../services/http.service';
import {FormBuilder} from '@angular/forms';
import {DepartmentsService} from '../../services/departments.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form;
  departments;
  constructor(public dialogRef: MatDialogRef<SignUpComponent>,
              private httpService: HttpService,
              private departmentsService: DepartmentsService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.departments = this.departmentsService.depart;
    this.form = this.fb.group({
      username: '',
      departmentId: null,
      password: '',
      birthday: '',
      description: '',
      firstName: 'string',
      role: 'ADMINISTRATOR',
      secondName: 'string',
      studentBookId: 'string',
    });
  }

  signUp() {
    this.httpService.post('/vsu/register', this.form.getRawValue()).subscribe(res => {
      this.dialogRef.close();
    });
  }

}

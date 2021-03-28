import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../../common/misc/helper';
import {FormBuilder} from '@angular/forms';
import {HttpService} from '../../../services/http.service';

interface InputData {
  mode: FormMode;
  element: any;
}

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {

  FormMode = FormMode;
  form;
  userSet = [
    {label: 'USER', value: 'USER'},
    {label: 'SPONSOR', value: 'SPONSOR'},
    {label: 'ADMINISTRATOR', value: 'ADMINISTRATOR'},
    ];

  constructor(public dialogRef: MatDialogRef<AddUserModalComponent>,
              private fb: FormBuilder,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) public data: InputData) { }

  ngOnInit(): void {

    if (this.data.mode === FormMode.ADD) {
      this.form = this.fb.group({
        firstName: '',
        secondName: '',
        username: '',
        role: 'USER',
        password: ''
      });
    } else {
      this.form = this.fb.group({
        ...this.data.element
      });
    }
  }

  save() {
    if (this.data.mode === FormMode.ADD) {
      this.httpService.post('/vsu/register', {...this.form.getRawValue()}).subscribe(res => {
        this.dialogRef.close(true);
      });
    } else {
      this.httpService.put('/vsu/user', {...this.form.getRawValue()}).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }

}

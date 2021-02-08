import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../common/misc/helper';
import {HttpService} from '../../services/http.service';
import {FormBuilder} from '@angular/forms';

interface InputData {
  mode: FormMode;
  element: any;
}

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  FormMode = FormMode;
  form = this.fb.group({
    name: '',
    description: ''
  });

  constructor(public dialogRef: MatDialogRef<AddDepartmentComponent>,
              private fb: FormBuilder,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) public data: InputData) { }

  ngOnInit(): void {
    if (this.data.mode === FormMode.EDIT) {
      this.form = this.fb.group({...this.data.element});
    }

  }

  save() {
    if (this.data.mode === FormMode.ADD) {
      this.httpService.post(`/vsu/department`, this.form.getRawValue()).subscribe(res => {
        this.dialogRef.close(true);
      });
    } else {
      this.httpService.put(`/vsu/department`, this.form.getRawValue()).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }

}

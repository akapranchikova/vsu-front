import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../../common/misc/helper';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-add-sponsor-modal',
  templateUrl: './add-tourn-modal.component.html',
  styleUrls: ['./add-tourn-modal.component.scss']
})
export class AddTournModalComponent implements OnInit {

  FormMode = FormMode;
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddTournModalComponent>,
              private httpService: HttpService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if (this.data.mode === FormMode.ADD) {
      this.form = this.fb.group({
      });
    } else {
      this.form = this.fb.group({...this.data.element});
    }
  }

  save() {
    if (this.data.mode === FormMode.EDIT) {
      this.httpService.put('/vsu/question', this.form.getRawValue()).subscribe(res => this.dialogRef.close(true));
    } else {
      this.httpService.post('/vsu/question', this.form.getRawValue()).subscribe(res => this.dialogRef.close(true));
    }
  }
}

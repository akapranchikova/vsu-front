import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../common/misc/helper';
import {HttpService} from '../../services/http.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-news-modal',
  templateUrl: './add-news-modal.component.html',
  styleUrls: ['./add-news-modal.component.scss']
})
export class AddNewsModalComponent implements OnInit {

  FormMode = FormMode;
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddNewsModalComponent>,
              private fb: FormBuilder,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if (this.data.element) {
      this.form = this.fb.group({...this.data.element});
    } else {
      this.form = this.fb.group({
        title: '',
        description: '',
        userId: 1
      });
    }
  }

  save() {
    if (this.data.mode === FormMode.EDIT) {
      this.httpService.put('/vsu/news', this.form.getRawValue()).subscribe(res => {
        this.dialogRef.close(true);
      });
    } else {
      this.httpService.post('/vsu/news', this.form.getRawValue()).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }



}

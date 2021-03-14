import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../common/misc/helper';
import {AddNewsModalComponent} from '../../news/add-news-modal/add-news-modal.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.scss']
})
export class AddQuestionModalComponent implements OnInit {

  FormMode = FormMode;
  form: FormGroup;
  user;

  constructor(public dialogRef: MatDialogRef<AddQuestionModalComponent>,
              private httpService: HttpService,
              private authService: AuthService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    this.authService.getUserObservable().subscribe(res => {
      this.user = res;
    });
    if (this.data.mode === FormMode.ADD) {
      this.form = this.fb.group({
        description: '',
        userId: this.user.id,
        answer: this.fb.group({
          description: ''
        })
      });
    } else {
      this.form = this.fb.group({
        ...this.data.element,
        answer: this.fb.group(this.data.element.answer ? {...this.data.element.answer} : {description: ''})});
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

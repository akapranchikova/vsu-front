import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../common/misc/helper';
import {AddNewsModalComponent} from '../../news/add-news-modal/add-news-modal.component';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.scss']
})
export class AddQuestionModalComponent implements OnInit {

  FormMode = FormMode;
  constructor(public dialogRef: MatDialogRef<AddQuestionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }



}

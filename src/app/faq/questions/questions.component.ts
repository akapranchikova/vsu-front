import { Component, OnInit } from '@angular/core';
import {AddNewsModalComponent} from '../../news/add-news-modal/add-news-modal.component';
import {FormMode} from '../../common/misc/helper';
import {MatDialog} from '@angular/material/dialog';
import {AddQuestionModalComponent} from '../add-question-modal/add-question-modal.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  FormMode = FormMode;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openAddQuestionModal(mode: FormMode, element?) {
    this.dialog.open(AddQuestionModalComponent, {
      width: '500px',
      data: {
        mode,
        element
      }
    });
  }

}

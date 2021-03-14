import {Component, OnInit} from '@angular/core';
import {AddNewsModalComponent} from '../../news/add-news-modal/add-news-modal.component';
import {FormMode} from '../../common/misc/helper';
import {MatDialog} from '@angular/material/dialog';
import {AddQuestionModalComponent} from '../add-question-modal/add-question-modal.component';
import {HttpService} from '../../services/http.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  FormMode = FormMode;
  setQuestions;
  isAdmin: boolean;
  user;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
    this.authService.getUserObservable().subscribe(res => {
      this.user = res;
    });
    this.loadQuestions();
  }

  loadQuestions() {
    this.httpService.get('/vsu/questions', {role: this.user.role}).subscribe(res => {
      this.setQuestions = res;
    });
  }

  openAddQuestionModal(mode: FormMode, element?) {
    console.log(element)
    this.dialog.open(AddQuestionModalComponent, {
      width: '500px',
      data: {
        mode,
        element
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.loadQuestions();
      }
    });
  }

  deleteQuestion(id) {
    this.httpService.delete('/vsu/question', {id}).subscribe(res => {
      this.loadQuestions();
    });
  }

}

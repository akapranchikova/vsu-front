import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { AddQuestionModalComponent } from './add-question-modal/add-question-modal.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent
  }
]

@NgModule({
  declarations: [QuestionsComponent, AddQuestionModalComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  entryComponents: [
    AddQuestionModalComponent
  ],
})
export class FaqModule { }

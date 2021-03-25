import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import {RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from '../common/material.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent
  }
];

@NgModule({
  declarations: [RatingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MaterialModule,
    FormsModule
  ]
})
export class RatingModule { }

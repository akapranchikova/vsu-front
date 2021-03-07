import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsComponent } from './tournaments/tournaments.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AddTournModalComponent} from './tournaments/add-tour-modal/add-tourn-modal.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MaterialModule} from '../common/material.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent
  }
];

@NgModule({
  declarations: [TournamentsComponent, AddTournModalComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddTournModalComponent
  ]
})
export class TournamentsModule { }

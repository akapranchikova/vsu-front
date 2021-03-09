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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TournamentCheckComponent } from './tournament-check/tournament-check.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent
  },
  {
    path: 'check/:id',
    component: TournamentCheckComponent
  }
];

@NgModule({
  declarations: [TournamentsComponent, AddTournModalComponent, TournamentCheckComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    AddTournModalComponent
  ]
})
export class TournamentsModule { }

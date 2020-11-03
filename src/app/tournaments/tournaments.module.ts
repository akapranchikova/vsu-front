import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsComponent } from './tournaments/tournaments.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AddTournModalComponent} from './tournaments/add-tour-modal/add-tourn-modal.component';

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
    MatTooltipModule
  ],
  entryComponents: [
    AddTournModalComponent
  ]
})
export class TournamentsModule { }

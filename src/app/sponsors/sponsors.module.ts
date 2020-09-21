import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddSponsorModalComponent } from './sponsors/add-sponsor-modal/add-sponsor-modal.component';
import {AddUserModalComponent} from '../users/users/add-user-modal/add-user-modal.component';


const routes: Routes = [
  {
    path: '',
    component: SponsorsComponent
  }
];

@NgModule({
  declarations: [SponsorsComponent, AddSponsorModalComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],
  entryComponents: [
    AddSponsorModalComponent
  ]
})
export class SponsorsModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from '../common/material.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MaterialModule,
    FormsModule
  ]
})
export class AccountModule { }

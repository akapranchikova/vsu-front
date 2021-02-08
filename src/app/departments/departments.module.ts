import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments/departments.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from '../common/material.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddDepartmentComponent } from './add-department/add-department.component';


const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent
  },
];

@NgModule({
  declarations: [DepartmentsComponent, AddDepartmentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MaterialModule,
    MatTooltipModule
  ],
  entryComponents: [AddDepartmentComponent]
})
export class DepartmentsModule { }

import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {SelectComponent} from './select/select.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { PaginationComponent } from './pagination/pagination.component';

const materialModules = [
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMomentDateModule,
  MatIconModule,
];

@NgModule({
  declarations: [SelectComponent, PaginationComponent],
  imports: [
    ...materialModules,
    MatTooltipModule,
    CommonModule,
  ], exports: [
        ...materialModules,
        SelectComponent,
        PaginationComponent
    ]
})
export class MaterialModule { }

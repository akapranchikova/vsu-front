import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpService} from '../../services/http.service';
import {FormMode} from '../../common/misc/helper';
import {AddUserModalComponent} from '../../users/users/add-user-modal/add-user-modal.component';
import {AddDepartmentComponent} from '../add-department/add-department.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {


  dataSource;
  displayedColumns = ['login', 'faculty', 'actions2'];
  FormMode = FormMode;

  constructor(private dialog: MatDialog, private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadData();
  }

   loadData() {
     this.httpService.get('/vsu/departments').subscribe(res => {
       this.dataSource = res;
     });
   }

  openUserModal(mode: FormMode, element?) {
    this.dialog.open(AddDepartmentComponent, {
      width: '400px',
      data: {
        mode,
        element
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.loadData();
      }
    });
  }

  deleteDepartment(id) {
    this.httpService.delete(`vsu/department`, {id}).subscribe(() => this.loadData());
  }

}

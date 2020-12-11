import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {AddUserModalComponent} from '../../users/users/add-user-modal/add-user-modal.component';
import {FormMode} from '../../common/misc/helper';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  dataSource = [
    {
      login: 'user',
      faculty: 'AMM',
      user: 'User 1',
      rating: 1200
    },
    {
      login: 'user',
      faculty: 'AMM',
      user: 'User 1',
      rating: 1200
    },
  ];
  displayedColumns = ['login', 'faculty', 'user', 'rating', 'actions'];
  FormMode = FormMode;



  constructor(private httpService: HttpService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.httpService.get('/vsu/tournaments').subscribe(res => {
      this.dataSource = res;
    });
  }

  openUserModal(mode: FormMode, element?) {
    this.dialog.open(AddUserModalComponent, {
      width: '400px',
      data: {
        mode,
        element
      }
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTournModalComponent} from '../../tournaments/tournaments/add-tour-modal/add-tourn-modal.component';
import {FormMode} from '../../common/misc/helper';
import {HttpService} from '../../services/http.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  FormMode = FormMode;
  setSponsors;
  isAdmin: boolean;

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
    this.httpService.get('/vsu/users', {role: 'SPONSOR'}).subscribe(res => {
      this.setSponsors = res;
    });
  }

  openAddSponsorModal(mode: FormMode, element?) {
    this.dialog.open(AddTournModalComponent, {
      width: '400px',
      data: {
        mode,
        element
      }
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTournModalComponent} from '../../tournaments/tournaments/add-tour-modal/add-tourn-modal.component';
import {FormMode} from '../../common/misc/helper';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  FormMode = FormMode;
  setSponsors;
  constructor(private dialog: MatDialog, private httpService: HttpService) {
  }

  ngOnInit(): void {
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

import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddSponsorModalComponent} from './add-sponsor-modal/add-sponsor-modal.component';
import {FormMode} from '../../common/misc/helper';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  FormMode = FormMode;
  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openAddSponsorModal(mode: FormMode, element?) {
    this.dialog.open(AddSponsorModalComponent, {
      width: '400px',
      data: {
        mode,
        element
      }
    });
  }

}

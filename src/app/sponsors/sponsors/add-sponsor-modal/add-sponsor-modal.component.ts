import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../../common/misc/helper';

@Component({
  selector: 'app-add-sponsor-modal',
  templateUrl: './add-sponsor-modal.component.html',
  styleUrls: ['./add-sponsor-modal.component.scss']
})
export class AddSponsorModalComponent implements OnInit {

  FormMode = FormMode;

  constructor(public dialogRef: MatDialogRef<AddSponsorModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../../common/misc/helper';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../../services/http.service';
import * as moment from 'moment';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-add-sponsor-modal',
  templateUrl: './add-tourn-modal.component.html',
  styleUrls: ['./add-tourn-modal.component.scss']
})
export class AddTournModalComponent implements OnInit {

  tourLabels = [
    {
      value: 'JAVA',
      label: 'Java'
    },
    {
      value: 'JS',
      label: 'JS'
    },
    {
      value: 'PYTHON',
      label: 'Python'
    },
  ];

  FormMode = FormMode;
  form: FormGroup;
  setSponsors;
  isAdmin: boolean;

  constructor(public dialogRef: MatDialogRef<AddTournModalComponent>,
              private httpService: HttpService,
              private authService: AuthService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
    if (this.isAdmin) {
      this.httpService.get('/vsu/users', {role: 'SPONSOR'}).subscribe(res => {
        this.setSponsors = res;
      });
    }
    if (this.data.mode === FormMode.ADD) {
      this.form = this.fb.group({
        name: '',
        label: 'JAVA',
        task: '',
        sponsorId: 1,
        startDate: new Date(),
        endDate: new Date(),
        prize: this.fb.group({
          name: '',
          description: '',
        })
      });
    } else {
      this.form = this.fb.group({...this.data.element,
        prize: this.fb.group(this.data.element.prize ? {...this.data.element.prize} : {   name: '',
          description: '',
          user: null})});
    }
  }

  save() {
    const formData = this.form.getRawValue();
    formData.startDate = moment(formData.startDate).format('yyyy-MM-DD');
    formData.endDate = moment(formData.endDate).format('yyyy-MM-DD');
    if (this.data.mode === FormMode.EDIT) {
      this.httpService.put('/vsu/tournament', formData).subscribe(res => this.dialogRef.close(true));
    } else {
      this.httpService.post('/vsu/tournament', formData).subscribe(res => this.dialogRef.close(true));
    }
  }
}

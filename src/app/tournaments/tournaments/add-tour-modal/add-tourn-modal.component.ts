import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormMode} from '../../../common/misc/helper';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
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
  FormArray = FormArray;
  FormMode = FormMode;
  form: FormGroup;
  setSponsors;
  isAdmin: boolean;

  constructor(public dialogRef: MatDialogRef<AddTournModalComponent>,
              private httpService: HttpService,
              private authService: AuthService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

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
        task: '',
        sponsorId: 1,
        startDate: new Date(),
        endDate: new Date(),
        technologies: this.fb.array([
          this.fb.group({
            key: null,
            percent: 100
          })
        ]),
        prize: this.fb.group({
          name: '',
          description: '',
        })
      });
    } else {
      this.form = this.fb.group({
        ...this.data.element,
        prize: this.fb.group(this.data.element.prize ? {...this.data.element.prize} : {
          name: '',
          description: '',
          user: null
        })
      });
    }
  }

  save() {
    const formData = this.form.getRawValue();
    formData.startDate = moment(formData.startDate).format('yyyy-MM-DD');
    formData.endDate = moment(formData.endDate).format('yyyy-MM-DD');
    let percentDiff = 0;
    formData.technologies = formData.technologies.reverse().map((tech, i) => {
      percentDiff += formData.technologies[i - 1] ? formData.technologies[i - 1].percent : 0;
      return {key: {technology: tech.key}, percent: tech.percent - percentDiff};
    });
    if (this.data.mode === FormMode.EDIT) {
      this.httpService.put('/vsu/tournament', formData).subscribe(res => this.dialogRef.close(true));
    } else {
      this.httpService.post('/vsu/tournament', formData).subscribe(res => this.dialogRef.close(true));
    }
  }

  addTech() {
    const value = (this.form.get('technologies') as FormArray)
      .at((this.form.get('technologies') as FormArray).controls.length - 1).value.percent;
    (this.form.get('technologies') as FormArray).push(this.fb.group({
      key: null,
      percent: value > 25 ? value - 25 : 0
    }));
  }

  deleteTech(index) {
    (this.form.get('technologies') as FormArray).removeAt(index);
  }

  changeRange(i) {
    const technologies = this.form.getRawValue().technologies;
    const value = (this.form.get('technologies') as FormArray).at(i).get('percent').value;
    if (i === 0) {
      (this.form.get('technologies') as FormArray).at(0).get('percent').setValue(100);
    } else {
      if (technologies[i - 1] && value >= technologies[i - 1].percent) {
        (this.form.get('technologies') as FormArray).at(i).get('percent').setValue(technologies[i - 1].percent - 1);
      } else if (technologies[i + 1] && value <= technologies[i + 1].percent) {
        (this.form.get('technologies') as FormArray).at(i).get('percent').setValue(technologies[i + 1].percent + 1);
      }
    }
  }

  getTech(i, end: boolean) {
    return this.form.get('technologies')['controls'][end ? this.form.get('technologies')['controls'].length - 1 - i : i];
  }

  getLeft(i) {
    const prevPercent = (this.getTech(i - 1, true) ? this.getTech(i - 1, true)?.value?.percent : 0);
    return ((this.getTech(i, true)?.value?.percent - prevPercent) / 2 + prevPercent);
  }

  getPercent(i) {
    const prevPercent = (this.getTech(i - 1, true) ? this.getTech(i - 1, true)?.value?.percent : 0);
    return ((this.getTech(i, true)?.value?.percent - prevPercent));
  }
}

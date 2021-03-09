import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tournament-check',
  templateUrl: './tournament-check.component.html',
  styleUrls: ['./tournament-check.component.scss']
})
export class TournamentCheckComponent implements OnInit {

  id: number;
  dataSource;
  displayedColumns = ['login', 'faculty', 'user', 'actions'];
  // FormMode = FormMode;
  constructor(private httpService: HttpService,
              private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadGrades();
  }

  loadGrades() {
    this.httpService.get('/vsu/tournament/participant/all', {tournamentId: this.id}).subscribe(res => {
      this.dataSource = res;
    });
  }

  saveGrade() {
    this.httpService.put(`/vsu/tournament/participant/grade?tournamentId=${this.id}`, this.dataSource).subscribe(res => {
      this.loadGrades();
    });
  }

}

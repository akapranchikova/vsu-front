import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {AddUserModalComponent} from '../../users/users/add-user-modal/add-user-modal.component';
import {FormMode} from '../../common/misc/helper';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {AddTournModalComponent} from './add-tour-modal/add-tourn-modal.component';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournaments = [];
  FormMode = FormMode;
  isAdmin: boolean;
  isSponsor: boolean;
  user;
  myTours;

  constructor(private httpService: HttpService,
              private authService: AuthService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
    this.isSponsor = this.authService.isSponsor;
    this.authService.getUserObservable().subscribe(res => {
      this.user = res;
    });
    this.loadTour();
  }

  loadTour() {
    this.httpService.get('/vsu/tournaments').subscribe(res => {
      this.tournaments = res.filter(t => t.status !== 'CREATED' || this.isAdmin || (this.isSponsor && t.sponsorId === this.user.id));
      this.httpService.get('/vsu/tournament/participant').subscribe(tours => {
        this.myTours = tours;
        tours.forEach(tour => {
          const el = this.tournaments.find(t => tour.tournamentId === t.id);
          if (el) {
            el.myTour = true;
          }
        });
      });
    });
  }

  openUserModal(mode: FormMode, element?) {
    this.dialog.open(AddTournModalComponent, {
      width: '700px',
      data: {
        mode,
        element
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.loadTour();
      }
    });
  }

  delete(id) {
    this.httpService.delete('/vsu/tournament', {id}).subscribe(res => {
      this.loadTour();
    });
  }

  goToTour(id) {
    this.httpService.post(`/vsu/tournament/participant?tournamentId=${id}`, {}).subscribe(res => {
      this.loadTour();
    });
  }

  deleteUserFromTour(id) {
    this.httpService.delete(`/vsu/tournament/participant?tournamentId=${id}`, {}).subscribe(res => {
      this.loadTour();
    });
  }

  changeStatus(tour: any, status: string) {
    this.httpService.put(`/vsu/tournament?tournamentId=${tour.id}`, {...tour, status}).subscribe(res => {
      this.loadTour();
    });
  }
}

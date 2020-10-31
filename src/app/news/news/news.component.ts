import { Component, OnInit } from '@angular/core';
import {AddSponsorModalComponent} from '../../sponsors/sponsors/add-sponsor-modal/add-sponsor-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {FormMode} from '../../common/misc/helper';
import {AddNewsModalComponent} from '../add-news-modal/add-news-modal.component';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  FormMode = FormMode;
  setNews;
  constructor(private dialog: MatDialog,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('/vsu/news/all').subscribe(res => {
      this.setNews = res;
    });
  }

  openAddNewsModal(mode: FormMode, element?) {
    this.dialog.open(AddNewsModalComponent, {
      width: '600px',
      data: {
        mode,
        element
      }
    });
  }

}
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {MaterialModule} from '../common/material.module';
import {MainComponent} from './main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'tournaments',
        loadChildren: () => import('../tournaments/tournaments.module').then(m => m.TournamentsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../account/account.module.js').then(m => m.AccountModule)
      },
      {
        path: 'sponsors',
        loadChildren: () => import('../sponsors/sponsors.module').then(m => m.SponsorsModule)
      },
      {
        path: 'rating',
        loadChildren: () => import('../rating/rating.module').then(m => m.RatingModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('../faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'departments',
        loadChildren: () => import('../departments/departments.module').then(m => m.DepartmentsModule)
      },
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, FooterComponent, HeaderComponent, SignInComponent, MainComponent, SignUpComponent],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SignInComponent,
    SignUpComponent
  ],
})
export class BaseModule {
}

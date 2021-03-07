import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MAT_DATE_LOCALE} from '@angular/material/core';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./base/base.module').then(m => m.BaseModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

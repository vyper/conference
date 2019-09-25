import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capybara2020Component } from './conferences/capybara2020/capybara2020.component';


const routes: Routes = [
  { path: '', redirectTo: '/2020/start', pathMatch: 'full' },
  { path: '2020/start', component: Capybara2020Component },
  { path: '**', redirectTo: '/2020/start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

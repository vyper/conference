import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capybara2020Component } from './conferences/capybara2020/capybara2020.component';


const routes: Routes = [
  { path: '', redirectTo: '/2020', pathMatch: 'full' },
  { path: '2020', component: Capybara2020Component },
  { path: '**', redirectTo: '/2020' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

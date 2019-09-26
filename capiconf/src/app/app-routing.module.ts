import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capybara2020Component } from './conferences/capybara2020/capybara2020.component';
import { Capybara2020faqComponent } from './conferences/capybara2020faq/capybara2020faq.component';
import { CocComponent } from './conferences/coc/coc.component';


const routes: Routes = [
  { path: '', redirectTo: '2020/start', pathMatch: 'full' },
  { path: '2020/start', component: Capybara2020Component },
  { path: '2020/faq', component: Capybara2020faqComponent },
  { path: 'coc', component: CocComponent },
  { path: '**', redirectTo: '2020/start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capybara2020Component } from './conferences/capybara2020/capybara2020.component';
import { Capybara2020faqComponent } from './conferences/capybara2020faq/capybara2020faq.component';
import { CocComponent } from './conferences/coc/coc.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: Capybara2020Component },
  { path: 'faq', component: Capybara2020faqComponent },
  { path: 'coc', component: CocComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

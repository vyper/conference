import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capybara2020Component } from './capybara2020.component';
import { Capybara2020faqComponent } from '../capybara2020faq/capybara2020faq.component';
import { Capi20SpeakersComponent } from '../capi20-speakers/capi20-speakers.component';
import { Capi20AgendaComponent } from '../capi20-agenda/capi20-agenda.component';

const routes: Routes = [
  { path: 'start', component: Capybara2020Component },
  { path: 'palestrantes', component: Capi20SpeakersComponent },
  { path: 'agenda', component: Capi20AgendaComponent },
  { path: 'faq', component: Capybara2020faqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Capybara2020RoutingModule { }

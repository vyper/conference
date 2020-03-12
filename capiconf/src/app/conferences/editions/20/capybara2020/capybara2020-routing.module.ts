import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capybara2020Component } from './capybara2020.component';
import { Capybara2020faqComponent } from '../capybara2020faq/capybara2020faq.component';
import { Capi20SpeakersComponent } from '../capi20-speakers/capi20-speakers.component';
import { Capi20AgendaComponent } from '../capi20-agenda/capi20-agenda.component';
import { Capi20AgendaPaineisComponent } from '../capi20-agenda-paineis/capi20-agenda-paineis.component';
import { CoronavirusComponent } from '../coronavirus/coronavirus.component';

const routes: Routes = [
  { path: 'start', component: Capybara2020Component },
  { path: 'inicio', component: Capybara2020Component },
  { path: 'pessoas', component: Capi20SpeakersComponent },
  { path: 'palestras', component: Capi20AgendaComponent },
  { path: 'paineis', component: Capi20AgendaPaineisComponent },
  { path: 'faq', component: Capybara2020faqComponent },
  { path: 'info-sobre-coronavirus', component: CoronavirusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Capybara2020RoutingModule { }

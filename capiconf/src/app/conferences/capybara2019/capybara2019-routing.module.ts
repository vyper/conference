import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { CodeOfConductComponent } from './features/code-of-conduct/code-of-conduct.component';
import { SpeakersComponent } from './features/speakers/speakers.component';
import { TalksComponent } from './features/talks/talks.component';
import { AgendaComponent } from './features/agenda/agenda.component';
import { FaqComponent } from './features/faq/faq.component';

const routes: Routes = [
  { path: 'start', component: HomeComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Capybara2019RoutingModule { }

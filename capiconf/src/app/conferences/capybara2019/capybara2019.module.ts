import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Capybara2019RoutingModule } from './capybara2019-routing.module';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './features/footer/footer.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { CodeOfConductComponent } from './features/code-of-conduct/code-of-conduct.component';
import { SpeakersComponent } from './features/speakers/speakers.component';
import { TicketsComponent } from './features/tickets/tickets.component';
import { TalksComponent } from './features/talks/talks.component';
import { AgendaComponent } from './features/agenda/agenda.component';
import { FaqComponent } from './features/faq/faq.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CodeOfConductComponent,
    SpeakersComponent,
    TicketsComponent,
    TalksComponent,
    AgendaComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    Capybara2019RoutingModule
  ]
})
export class Capybara2019Module { }

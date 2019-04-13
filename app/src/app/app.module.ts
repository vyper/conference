import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { RouterModule } from '@angular/router';
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
    AppComponent,
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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

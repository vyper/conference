import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Capybara2020RoutingModule } from './capybara2020-routing.module';
import { Capybara2020Component } from './capybara2020.component';
import { Capybara2020faqComponent } from '../capybara2020faq/capybara2020faq.component';
import { Capi20NavBarComponent } from '../capi20-nav-bar/capi20-nav-bar.component';
import { Capi20FooterComponent } from '../capi20-footer/capi20-footer.component';
import { Capi20SpeakersComponent } from '../capi20-speakers/capi20-speakers.component';
import { Capi20SideNavComponent } from '../capi20-side-nav/capi20-side-nav.component';
import { Capi20AgendaComponent } from '../capi20-agenda/capi20-agenda.component';
import { Capi20AgendaPaineisComponent } from '../capi20-agenda-paineis/capi20-agenda-paineis.component';
import { Capi20LocationComponent } from '../capi20-location/capi20-location.component';
import { Capi20SponsorsComponent } from '../capi20-sponsors/capi20-sponsors.component';
import { Capi20HelpformComponent } from '../capi20-helpform/capi20-helpform.component';


@NgModule({
  declarations: [
    Capybara2020Component,
    Capybara2020faqComponent,
    Capi20NavBarComponent,
    Capi20FooterComponent,
    Capi20SpeakersComponent,
    Capi20SideNavComponent,
    Capi20AgendaComponent,
    Capi20AgendaPaineisComponent,
    Capi20LocationComponent,
    Capi20SponsorsComponent,
    Capi20HelpformComponent
  ],
  imports: [
    CommonModule,
    Capybara2020RoutingModule
  ]
})
export class Capybara2020Module { }

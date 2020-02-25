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


@NgModule({
  declarations: [
    Capybara2020Component,
    Capybara2020faqComponent,
    Capi20NavBarComponent,
    Capi20FooterComponent,
    Capi20SpeakersComponent,
    Capi20SideNavComponent,
    Capi20AgendaComponent
  ],
  imports: [
    CommonModule,
    Capybara2020RoutingModule
  ]
})
export class Capybara2020Module { }

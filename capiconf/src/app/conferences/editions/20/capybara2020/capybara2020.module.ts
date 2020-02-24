import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Capybara2020RoutingModule } from './capybara2020-routing.module';
import { Capybara2020Component } from './capybara2020.component';
import { Capybara2020faqComponent } from '../capybara2020faq/capybara2020faq.component';


@NgModule({
  declarations: [
    Capybara2020Component,
    Capybara2020faqComponent
  ],
  imports: [
    CommonModule,
    Capybara2020RoutingModule
  ]
})
export class Capybara2020Module { }

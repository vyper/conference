import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Capybara2020Component } from './conferences/capybara2020/capybara2020.component';
import { Capybara2020faqComponent } from './conferences/capybara2020faq/capybara2020faq.component';
import { CocComponent } from './conferences/coc/coc.component';

@NgModule({
  declarations: [
    AppComponent,
    Capybara2020Component,
    Capybara2020faqComponent,
    CocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

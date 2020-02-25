import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from './faq.data';

@Component({
  selector: 'app-capybara2020faq',
  templateUrl: './capybara2020faq.component.html',
  styleUrls: ['./capybara2020faq.component.scss']
})
export class Capybara2020faqComponent implements OnInit {

  questions = QUESTIONS;

  constructor() { }

  ngOnInit() {
  }

}

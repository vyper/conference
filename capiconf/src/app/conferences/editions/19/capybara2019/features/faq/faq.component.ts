import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from './faq.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  questions = QUESTIONS;

  constructor() { }

  ngOnInit() {
  }

}

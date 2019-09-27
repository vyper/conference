import { Component, OnInit } from '@angular/core';
import { CONFERENCE } from './data';

@Component({
  selector: 'app-capybara2020',
  templateUrl: './capybara2020.component.html',
  styleUrls: ['./capybara2020.component.scss']
})
export class Capybara2020Component implements OnInit {

  conference = CONFERENCE;

  constructor() { }

  ngOnInit() {
  }

}

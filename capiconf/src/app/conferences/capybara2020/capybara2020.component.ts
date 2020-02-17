import { Component, OnInit } from '@angular/core';
import { CONFERENCE } from './data';

@Component({
  selector: 'app-capybara2020',
  templateUrl: './capybara2020.component.html',
  styleUrls: ['./capybara2020.component.scss']
})
export class Capybara2020Component implements OnInit {

  conference = CONFERENCE;
  bgImages = [
    { path: '../../../assets/bg_person.jpg' },
    { path: '../../../assets/bg_person_02.jpg' },
    { path: '../../../assets/bg_person_04.jpg' },
    { path: '../../../assets/bg_person_05.jpg' }
  ]

  constructor() { }

  ngOnInit() {
  }

  radomHeroBackground() {
    let rdn = Math.floor(Math.random() * this.bgImages.length) + 0;
    return `url(${this.bgImages[rdn].path})`;
  }

}

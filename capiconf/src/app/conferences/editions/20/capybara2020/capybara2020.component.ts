import { Component, OnInit } from '@angular/core';
import { CONFERENCE } from './data';
import { TALKS } from '../talks';

@Component({
  selector: 'app-capybara2020',
  templateUrl: './capybara2020.component.html',
  styleUrls: ['./capybara2020.component.scss']
})
export class Capybara2020Component implements OnInit {

  talks = TALKS;
  speakers = [];
  conference = CONFERENCE;
  bgImages = [
    { path: '../../../assets/bg_person.jpg' },
    { path: '../../../assets/bg_person_02.jpg' },
    { path: '../../../assets/bg_person_04.jpg' }
  ]

  constructor() { }

  ngOnInit() {
    this.talks.forEach(talk => {
      talk.speakers.forEach(speaker => {
        this.speakers.push(speaker);
      });

      this.shuffle(this.speakers);
      this.speakers = this.speakers.slice(0,6);
  });
  }

  radomHeroBackground() {
    let rdn = Math.floor(Math.random() * this.bgImages.length) + 0;
    return `url(${this.bgImages[rdn].path})`;
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

}

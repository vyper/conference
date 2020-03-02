import { Component, OnInit } from '@angular/core';
import { CONFERENCE } from './data';
import { TALKS } from '../talks';
import { PANELS } from '../panels';

@Component({
  selector: 'app-capybara2020',
  templateUrl: './capybara2020.component.html',
  styleUrls: ['./capybara2020.component.scss']
})
export class Capybara2020Component implements OnInit {

  talks = TALKS;
  panels = PANELS;
  speakers = [];
  conference = CONFERENCE;
  bgImages = [
    { path: '../../../assets/bg_person.jpg' },
    { path: '../../../assets/bg_person_02.jpg' },
    { path: '../../../assets/bg_person_04.jpg' }
  ]

  constructor() { }

  ngOnInit() {

    this.loadPeople(this.talks);
    this.loadPeople(this.panels);
    this.shuffle(this.speakers);
    this.speakers = this.speakers.slice(0, 6);

  }

  loadPeople(source: any) {
    source.forEach(content => {
      content.speakers.forEach(speaker => {
        let alreadyAdded = this.speakers.filter(s => s.name === speaker.name);
        if (alreadyAdded.length == 0) {
          this.speakers.push(speaker);
        }
      });
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

import { Component, OnInit, Renderer } from '@angular/core';
import { PHOTOS } from './home.data';
import { NAVPAGES } from '../navbar/navigation.data';
import { TALKS } from '../talks/talks.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pages = NAVPAGES;
  speakers = TALKS;
  photos = PHOTOS;

  constructor() {
    // tslint:disable-next-line:max-line-length
    document.body.classList.add('uk-light');
    //  document.body.classList.add('wrap');
    document.body.classList.add('uk-background-norepeat');
    document.body.classList.add('uk-background-secondary');
    document.body.classList.add('capiconf-uk-cover');
  }

  ngOnInit() {}

  hasRealAvatar(element, index, array) {
    return element.speaker.avatar !== '/assets/2019/img/speakers/';
  }
}

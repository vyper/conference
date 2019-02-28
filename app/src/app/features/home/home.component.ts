import { Component, OnInit, Renderer } from '@angular/core';
import { SPEAKERS, PHOTOS } from './home.data';
import { NAVPAGES } from '../navbar/navigation.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pages = NAVPAGES;
  speakers = SPEAKERS;
  photos = PHOTOS;

  constructor() {
    // tslint:disable-next-line:max-line-length
      document.body.classList.add('uk-light');
    //  document.body.classList.add('wrap');
      document.body.classList.add('uk-background-norepeat');
      document.body.classList.add('uk-background-secondary');
      document.body.classList.add('capiconf-uk-cover');
   }

  ngOnInit() {

  }

}

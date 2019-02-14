import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    // tslint:disable-next-line:max-line-length
    document.body.classList.add('uk-light');
     document.body.classList.add('wrap');
     document.body.classList.add('uk-background-norepeat');
     document.body.classList.add('uk-background-cover');
     document.body.classList.add('uk-background-center-center');
     document.body.classList.add('uk-cover-container');
     document.body.classList.add('uk-background-secondary');
     document.body.classList.add('capiconf-uk-cover');
   }

  ngOnInit() {

  }

}

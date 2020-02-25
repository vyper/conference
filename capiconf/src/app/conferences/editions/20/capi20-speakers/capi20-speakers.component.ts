import { Component, OnInit } from '@angular/core';
import { TALKS } from '../talks';

@Component({
  selector: 'app-capi20-speakers',
  templateUrl: './capi20-speakers.component.html',
  styleUrls: ['./capi20-speakers.component.scss']
})
export class Capi20SpeakersComponent implements OnInit {

  talks = TALKS;
  speakers = [];

  constructor() { 

  }

  ngOnInit() {
    this.talks.forEach(talk => {
        talk.speakers.forEach(speaker => {
          this.speakers.push(speaker);
        });
    });
  }
}

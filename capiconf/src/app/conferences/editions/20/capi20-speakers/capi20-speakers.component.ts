import { Component, OnInit } from '@angular/core';
import { TALKS } from '../talks';
import { PANELS } from '../panels';
import { TEAM } from '../team';

@Component({
  selector: 'app-capi20-speakers',
  templateUrl: './capi20-speakers.component.html',
  styleUrls: ['./capi20-speakers.component.scss']
})
export class Capi20SpeakersComponent implements OnInit {

  team = TEAM;
  talks = TALKS;
  panels = PANELS;
  speakers = [];

  constructor() {

  }

  ngOnInit() {
    this.loadPeople(this.talks);
    this.loadPeople(this.panels);
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
}

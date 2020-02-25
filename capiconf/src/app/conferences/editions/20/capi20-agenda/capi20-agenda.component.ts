import { Component, OnInit } from '@angular/core';
import { AGENDA_DIA_01, AGENDA_DIA_02 } from './agenda.data';
import { TALKS } from '../talks';

@Component({
  selector: 'app-capi20-agenda',
  templateUrl: './capi20-agenda.component.html',
  styleUrls: ['./capi20-agenda.component.scss']
})
export class Capi20AgendaComponent implements OnInit {

  dayOne = [];
  dayTwo = [];

  constructor() { }

  ngOnInit() {

    this.loadAgenda(AGENDA_DIA_01, this.dayOne);
    this.loadAgenda(AGENDA_DIA_02, this.dayTwo);

  }

  loadAgenda(source: any[], destiny: any[]) {

    source.forEach(element => {

      if (element.contentId !== null) {

        var content = TALKS.filter(i => i.id === element.contentId);
        element.title = content[0].title;
        element.description = content[0].description;
        element.speakers = content[0].speakers;
      }

      destiny.push(element);

    })
  }
}

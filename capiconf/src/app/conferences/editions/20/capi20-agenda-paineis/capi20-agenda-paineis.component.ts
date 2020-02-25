import { Component, OnInit } from '@angular/core';
import { AGENDA_PAINEL_DIA_01, AGENDA_PAINEL_DIA_02 } from './agenda_paineis.data';
import { PANELS } from '../panels';

@Component({
  selector: 'app-capi20-agenda-paineis',
  templateUrl: './capi20-agenda-paineis.component.html',
  styleUrls: ['./capi20-agenda-paineis.component.scss']
})
export class Capi20AgendaPaineisComponent implements OnInit {

  dayOne = [];
  dayTwo = [];

  constructor() { }

  ngOnInit() {
    this.loadAgenda(AGENDA_PAINEL_DIA_01, this.dayOne);
    this.loadAgenda(AGENDA_PAINEL_DIA_02, this.dayTwo);
  }

  loadAgenda(source: any[], destiny: any[]) {

    source.forEach(element => {

      if (element.contentId !== null) {

        var content = PANELS.filter(i => i.id === element.contentId);
        element.title = content[0].title;
        element.description = content[0].description;
        element.speakers = content[0].speakers;
      }

      destiny.push(element);

    })
  }

}

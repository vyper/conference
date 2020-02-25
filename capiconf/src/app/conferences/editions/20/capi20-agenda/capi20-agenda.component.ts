import { Component, OnInit } from '@angular/core';
import { AGENDA_DIA_01, AGENDA_DIA_02 } from './agenda.data';

@Component({
  selector: 'app-capi20-agenda',
  templateUrl: './capi20-agenda.component.html',
  styleUrls: ['./capi20-agenda.component.scss']
})
export class Capi20AgendaComponent implements OnInit {

  agendaDiaUm = AGENDA_DIA_01;
  agendaDiaDois = AGENDA_DIA_02;

  constructor() { }

  ngOnInit() {
  }

}

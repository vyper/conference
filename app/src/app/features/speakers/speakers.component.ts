import { Component, OnInit } from '@angular/core';
import { SPEAKERS } from '../home/home.data';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers = SPEAKERS;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { SPEAKERS } from '../home/home.data';
import { TALKS } from '../talks/talks.data';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers = TALKS.sort(function(a, b){
    if(a.speaker.name < b.speaker.name) { return -1; }
    if(a.speaker.name > b.speaker.name) { return 1; }
    return 0;
});;

  constructor() { }

  ngOnInit() {
  }

  //totaly temporary
  public replaceForAFakeAvatar(url:string, name:string) {
    if(url !== '../../../assets/img/speakers/') {
      return url;
    }
    
    return `https://api.adorable.io/avatars/285/${name}.png`;
  }

}

import { Component, OnInit } from '@angular/core';
import { TALKS } from './talks.data';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  talks = TALKS.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
});

  tags = ['Developer stories',
  'multi-cloud',
  'event-driven applications',
  'UX',
  'programação funcional',
  'Bando de Dados',
  'NoSQL',
  'Empreendedorismo',
  'Liderança',
  'microservices',
  'Docker',
  'DevOps',
  'Laravel',
  'PHP',
  'MySQL',
  'Kubernetes',
  'Experiências Disruptivas',
  'UI',
  'Agile',
  'Data Science',
  'análise de dados',
  'Python',
  'Android',
  'iOS',
  'Xamarin',
  'TDD',
  'OSS',
  'experiência do usuário',
  'acessibilidade',
  'Front-end',
  'Cases'];

  constructor() { }

  ngOnInit() {
  }

}

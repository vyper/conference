import { Component, OnInit } from '@angular/core';
import { Title, Meta }  from '@angular/platform-browser';

@Component({
  selector: 'app-inclua-toda-pessoa',
  templateUrl: './inclua-toda-pessoa.component.html',
  styleUrls: ['./inclua-toda-pessoa.component.scss']
})
export class IncluaTodaPessoaComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Inclua toda pessoa! Não queremos apenas mais uma camiseta de evento! #incluatodapessoa #capiconf');
    this.metaService.updateTag({ name: 'description', content: 'Queremos uma causa para apoiar, algo maior que uma conferência de pessoas desenvolvedoras, algo maior que o #CapiConf, algo que faça a diferença, que provoque, que faça você pensar, que faça você repensar, que faça você se importar, se posicionar. Toda pessoa deve ser incluída e reconhecida de forma igual.' });
  }

}

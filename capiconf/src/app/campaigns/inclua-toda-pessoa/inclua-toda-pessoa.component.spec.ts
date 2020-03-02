import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluaTodaPessoaComponent } from './inclua-toda-pessoa.component';

describe('IncluaTodaPessoaComponent', () => {
  let component: IncluaTodaPessoaComponent;
  let fixture: ComponentFixture<IncluaTodaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluaTodaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluaTodaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

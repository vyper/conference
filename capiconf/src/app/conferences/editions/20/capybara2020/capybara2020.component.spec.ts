import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capybara2020Component } from './capybara2020.component';

describe('Capybara2020Component', () => {
  let component: Capybara2020Component;
  let fixture: ComponentFixture<Capybara2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capybara2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capybara2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

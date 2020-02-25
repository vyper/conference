import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capybara2020faqComponent } from './capybara2020faq.component';

describe('Capybara2020faqComponent', () => {
  let component: Capybara2020faqComponent;
  let fixture: ComponentFixture<Capybara2020faqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capybara2020faqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capybara2020faqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

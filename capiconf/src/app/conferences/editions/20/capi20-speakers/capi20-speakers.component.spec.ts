import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20SpeakersComponent } from './capi20-speakers.component';

describe('Capi20SpeakersComponent', () => {
  let component: Capi20SpeakersComponent;
  let fixture: ComponentFixture<Capi20SpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20SpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20SpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

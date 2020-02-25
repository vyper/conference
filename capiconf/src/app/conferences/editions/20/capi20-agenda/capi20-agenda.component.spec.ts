import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20AgendaComponent } from './capi20-agenda.component';

describe('Capi20AgendaComponent', () => {
  let component: Capi20AgendaComponent;
  let fixture: ComponentFixture<Capi20AgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20AgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20AgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20AgendaPaineisComponent } from './capi20-agenda-paineis.component';

describe('Capi20AgendaPaineisComponent', () => {
  let component: Capi20AgendaPaineisComponent;
  let fixture: ComponentFixture<Capi20AgendaPaineisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20AgendaPaineisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20AgendaPaineisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20SponsorsComponent } from './capi20-sponsors.component';

describe('Capi20SponsorsComponent', () => {
  let component: Capi20SponsorsComponent;
  let fixture: ComponentFixture<Capi20SponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20SponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20SponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

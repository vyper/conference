import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20LocationComponent } from './capi20-location.component';

describe('Capi20LocationComponent', () => {
  let component: Capi20LocationComponent;
  let fixture: ComponentFixture<Capi20LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20LocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

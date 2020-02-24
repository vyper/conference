import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20NavBarComponent } from './capi20-nav-bar.component';

describe('Capi20NavBarComponent', () => {
  let component: Capi20NavBarComponent;
  let fixture: ComponentFixture<Capi20NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

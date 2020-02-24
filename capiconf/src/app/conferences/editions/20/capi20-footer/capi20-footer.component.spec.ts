import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20FooterComponent } from './capi20-footer.component';

describe('Capi20FooterComponent', () => {
  let component: Capi20FooterComponent;
  let fixture: ComponentFixture<Capi20FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

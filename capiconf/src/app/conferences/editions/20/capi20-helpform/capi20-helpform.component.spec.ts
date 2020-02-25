import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20HelpformComponent } from './capi20-helpform.component';

describe('Capi20HelpformComponent', () => {
  let component: Capi20HelpformComponent;
  let fixture: ComponentFixture<Capi20HelpformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20HelpformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20HelpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

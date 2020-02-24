import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capi20SideNavComponent } from './capi20-side-nav.component';

describe('Capi20SideNavComponent', () => {
  let component: Capi20SideNavComponent;
  let fixture: ComponentFixture<Capi20SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capi20SideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capi20SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

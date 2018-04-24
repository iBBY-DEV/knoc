import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarElementsComponent } from './navbar-elements.component';

describe('NavbarElementsComponent', () => {
  let component: NavbarElementsComponent;
  let fixture: ComponentFixture<NavbarElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

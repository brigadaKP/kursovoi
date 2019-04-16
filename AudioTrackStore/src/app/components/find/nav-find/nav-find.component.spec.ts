import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFindComponent } from './nav-find.component';

describe('NavFindComponent', () => {
  let component: NavFindComponent;
  let fixture: ComponentFixture<NavFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

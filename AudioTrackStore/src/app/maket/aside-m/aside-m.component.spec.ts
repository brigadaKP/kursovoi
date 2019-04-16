import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMComponent } from './aside-m.component';

describe('AsideMComponent', () => {
  let component: AsideMComponent;
  let fixture: ComponentFixture<AsideMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

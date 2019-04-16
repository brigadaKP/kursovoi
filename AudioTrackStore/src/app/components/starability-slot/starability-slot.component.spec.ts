import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarabilitySlotComponent } from './starability-slot.component';

describe('StarabilitySlotComponent', () => {
  let component: StarabilitySlotComponent;
  let fixture: ComponentFixture<StarabilitySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarabilitySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarabilitySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

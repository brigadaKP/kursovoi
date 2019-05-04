import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackItemComponent } from './add-track-item.component';

describe('AddTrackItemComponent', () => {
  let component: AddTrackItemComponent;
  let fixture: ComponentFixture<AddTrackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

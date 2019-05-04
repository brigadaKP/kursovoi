import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicianItemComponent } from './add-musician-item.component';

describe('AddMusicianItemComponent', () => {
  let component: AddMusicianItemComponent;
  let fixture: ComponentFixture<AddMusicianItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMusicianItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicianItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

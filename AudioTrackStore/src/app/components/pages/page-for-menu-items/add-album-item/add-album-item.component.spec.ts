import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbumItemComponent } from './add-album-item.component';

describe('AddAlbumItemComponent', () => {
  let component: AddAlbumItemComponent;
  let fixture: ComponentFixture<AddAlbumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlbumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlbumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

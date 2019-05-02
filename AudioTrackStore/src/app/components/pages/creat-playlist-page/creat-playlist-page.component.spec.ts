import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPlaylistPageComponent } from './creat-playlist-page.component';

describe('CreatPlaylistPageComponent', () => {
  let component: CreatPlaylistPageComponent;
  let fixture: ComponentFixture<CreatPlaylistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatPlaylistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatPlaylistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

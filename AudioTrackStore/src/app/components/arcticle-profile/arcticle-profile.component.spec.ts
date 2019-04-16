import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticleProfileComponent } from './arcticle-profile.component';

describe('ArcticleProfileComponent', () => {
  let component: ArcticleProfileComponent;
  let fixture: ComponentFixture<ArcticleProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcticleProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcticleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

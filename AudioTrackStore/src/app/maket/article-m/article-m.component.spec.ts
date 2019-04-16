import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMComponent } from './article-m.component';

describe('ArticleMComponent', () => {
  let component: ArticleMComponent;
  let fixture: ComponentFixture<ArticleMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

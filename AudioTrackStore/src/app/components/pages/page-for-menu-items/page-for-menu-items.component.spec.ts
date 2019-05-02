import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForMenuItemsComponent } from './page-for-menu-items.component';

describe('PageForMenuItemsComponent', () => {
  let component: PageForMenuItemsComponent;
  let fixture: ComponentFixture<PageForMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

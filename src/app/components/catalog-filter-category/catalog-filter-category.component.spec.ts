import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFilterCategoryComponent } from './catalog-filter-category.component';

describe('CatalogFilterCategoryComponent', () => {
  let component: CatalogFilterCategoryComponent;
  let fixture: ComponentFixture<CatalogFilterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFilterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFilterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

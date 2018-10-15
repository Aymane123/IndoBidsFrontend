import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingsectionComponent } from './sortingsection.component';

describe('SortingsectionComponent', () => {
  let component: SortingsectionComponent;
  let fixture: ComponentFixture<SortingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

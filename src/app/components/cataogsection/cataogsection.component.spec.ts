import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataogsectionComponent } from './cataogsection.component';

describe('CataogsectionComponent', () => {
  let component: CataogsectionComponent;
  let fixture: ComponentFixture<CataogsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataogsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataogsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferinfoComponent } from './offerinfo.component';

describe('OfferinfoComponent', () => {
  let component: OfferinfoComponent;
  let fixture: ComponentFixture<OfferinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

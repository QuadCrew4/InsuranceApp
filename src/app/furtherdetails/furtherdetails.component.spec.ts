import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherdetailsComponent } from './furtherdetails.component';

describe('FurtherdetailsComponent', () => {
  let component: FurtherdetailsComponent;
  let fixture: ComponentFixture<FurtherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

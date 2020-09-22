import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimhistoryComponent } from './claimhistory.component';

describe('ClaimhistoryComponent', () => {
  let component: ClaimhistoryComponent;
  let fixture: ComponentFixture<ClaimhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCapacityComponent } from './dashboard-capacity.component';

describe('DashboardCapacityComponent', () => {
  let component: DashboardCapacityComponent;
  let fixture: ComponentFixture<DashboardCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

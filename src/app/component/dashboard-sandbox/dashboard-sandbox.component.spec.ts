import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSandboxComponent } from './dashboard-sandbox.component';

describe('DashboardSandboxComponent', () => {
  let component: DashboardSandboxComponent;
  let fixture: ComponentFixture<DashboardSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

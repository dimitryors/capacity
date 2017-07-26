import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourceBoardComponent } from './datasource-board.component';

describe('DatasourceBoardComponent', () => {
  let component: DatasourceBoardComponent;
  let fixture: ComponentFixture<DatasourceBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourceBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

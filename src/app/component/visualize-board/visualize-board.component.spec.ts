import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeBoardComponent } from './visualize-board.component';

describe('VisualizeBoardComponent', () => {
  let component: VisualizeBoardComponent;
  let fixture: ComponentFixture<VisualizeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

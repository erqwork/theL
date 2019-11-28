import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffGraphComponent } from './diff-graph.component';

describe('DiffGraphComponent', () => {
  let component: DiffGraphComponent;
  let fixture: ComponentFixture<DiffGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

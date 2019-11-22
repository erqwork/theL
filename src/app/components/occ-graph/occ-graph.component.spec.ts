import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccGraphComponent } from './occ-graph.component';

describe('OccGraphComponent', () => {
  let component: OccGraphComponent;
  let fixture: ComponentFixture<OccGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

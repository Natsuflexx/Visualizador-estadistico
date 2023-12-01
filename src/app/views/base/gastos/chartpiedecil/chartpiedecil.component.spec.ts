import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpiedecilComponent } from './chartpiedecil.component';

describe('ChartpiedecilComponent', () => {
  let component: ChartpiedecilComponent;
  let fixture: ComponentFixture<ChartpiedecilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartpiedecilComponent]
    });
    fixture = TestBed.createComponent(ChartpiedecilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

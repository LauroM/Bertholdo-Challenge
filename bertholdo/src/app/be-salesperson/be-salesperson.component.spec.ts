import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSalespersonComponent } from './be-salesperson.component';

describe('BeSalespersonComponent', () => {
  let component: BeSalespersonComponent;
  let fixture: ComponentFixture<BeSalespersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeSalespersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeSalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

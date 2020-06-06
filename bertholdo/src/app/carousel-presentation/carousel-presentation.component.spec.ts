import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPresentationComponent } from './carousel-presentation.component';

describe('CarouselPresentationComponent', () => {
  let component: CarouselPresentationComponent;
  let fixture: ComponentFixture<CarouselPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

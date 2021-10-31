import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDishComponent } from './popular-dish.component';

describe('PopularDishComponent', () => {
  let component: PopularDishComponent;
  let fixture: ComponentFixture<PopularDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

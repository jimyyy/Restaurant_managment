import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardchefComponent } from './dashboardchef.component';

describe('DashboardchefComponent', () => {
  let component: DashboardchefComponent;
  let fixture: ComponentFixture<DashboardchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

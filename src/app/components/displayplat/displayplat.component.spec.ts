import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayplatComponent } from './displayplat.component';

describe('DisplayplatComponent', () => {
  let component: DisplayplatComponent;
  let fixture: ComponentFixture<DisplayplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayplatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

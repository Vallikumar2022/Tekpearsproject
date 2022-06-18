import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientsHistoryDailogComponent } from './view-patients-history-dailog.component';

describe('ViewPatientsHistoryDailogComponent', () => {
  let component: ViewPatientsHistoryDailogComponent;
  let fixture: ComponentFixture<ViewPatientsHistoryDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientsHistoryDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientsHistoryDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

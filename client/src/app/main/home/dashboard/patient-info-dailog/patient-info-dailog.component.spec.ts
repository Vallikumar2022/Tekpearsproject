import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoDailogComponent } from './patient-info-dailog.component';

describe('PatientInfoDailogComponent', () => {
  let component: PatientInfoDailogComponent;
  let fixture: ComponentFixture<PatientInfoDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientInfoDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

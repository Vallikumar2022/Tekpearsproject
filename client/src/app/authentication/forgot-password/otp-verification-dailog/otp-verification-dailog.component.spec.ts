import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificationDailogComponent } from './otp-verification-dailog.component';

describe('OtpVerificationDailogComponent', () => {
  let component: OtpVerificationDailogComponent;
  let fixture: ComponentFixture<OtpVerificationDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpVerificationDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVerificationDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

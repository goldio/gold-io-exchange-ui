import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullSentEmailPasswordComponent } from './sucessfull-sent-email-password.component';

describe('SucessfullSentEmailPasswordComponent', () => {
  let component: SucessfullSentEmailPasswordComponent;
  let fixture: ComponentFixture<SucessfullSentEmailPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessfullSentEmailPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfullSentEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

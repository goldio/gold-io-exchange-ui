import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceWithdrawalComponent } from './balance-withdrawal.component';

describe('BalanceWithdrawalComponent', () => {
  let component: BalanceWithdrawalComponent;
  let fixture: ComponentFixture<BalanceWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

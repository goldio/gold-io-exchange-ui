import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDepositComponent } from './balance-deposit.component';

describe('BalanceDepositComponent', () => {
  let component: BalanceDepositComponent;
  let fixture: ComponentFixture<BalanceDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

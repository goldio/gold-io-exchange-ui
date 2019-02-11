import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaceHistoryComponent } from './balace-history.component';

describe('BalaceHistoryComponent', () => {
  let component: BalaceHistoryComponent;
  let fixture: ComponentFixture<BalaceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalaceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalaceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

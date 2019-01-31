import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullComponent } from './sucessfull.component';

describe('SucessfullComponent', () => {
  let component: SucessfullComponent;
  let fixture: ComponentFixture<SucessfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

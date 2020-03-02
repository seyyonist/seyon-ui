import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStmtComponent } from './bank-stmt.component';

describe('BankStmtComponent', () => {
  let component: BankStmtComponent;
  let fixture: ComponentFixture<BankStmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankStmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankStmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherFyaComponent } from './voucher-fya.component';

describe('VoucherFyaComponent', () => {
  let component: VoucherFyaComponent;
  let fixture: ComponentFixture<VoucherFyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherFyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherFyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

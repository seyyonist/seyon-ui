import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenInvoiceComponent } from './gen-invoice.component';

describe('GenInvoiceComponent', () => {
  let component: GenInvoiceComponent;
  let fixture: ComponentFixture<GenInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

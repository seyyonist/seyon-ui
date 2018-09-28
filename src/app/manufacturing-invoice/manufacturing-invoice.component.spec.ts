import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingInvoiceComponent } from './manufacturing-invoice.component';

describe('ManufacturingInvoiceComponent', () => {
  let component: ManufacturingInvoiceComponent;
  let fixture: ComponentFixture<ManufacturingInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturingInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

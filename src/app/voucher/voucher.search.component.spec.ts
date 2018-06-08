import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Voucher.SearchComponent } from './voucher.search.component';

describe('Voucher.SearchComponent', () => {
  let component: Voucher.SearchComponent;
  let fixture: ComponentFixture<Voucher.SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Voucher.SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Voucher.SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

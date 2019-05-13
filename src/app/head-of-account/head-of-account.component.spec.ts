import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfAccountComponent } from './head-of-account.component';

describe('HeadOfAccountComponent', () => {
  let component: HeadOfAccountComponent;
  let fixture: ComponentFixture<HeadOfAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOfAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

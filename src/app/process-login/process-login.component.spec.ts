import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessLoginComponent } from './process-login.component';

describe('ProcessLoginComponent', () => {
  let component: ProcessLoginComponent;
  let fixture: ComponentFixture<ProcessLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

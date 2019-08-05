import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupiewsComponent } from './signupiews.component';

describe('SignupiewsComponent', () => {
  let component: SignupiewsComponent;
  let fixture: ComponentFixture<SignupiewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupiewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupiewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

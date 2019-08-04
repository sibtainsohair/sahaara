import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginchefComponent } from './loginchef.component';

describe('LoginchefComponent', () => {
  let component: LoginchefComponent;
  let fixture: ComponentFixture<LoginchefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginchefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

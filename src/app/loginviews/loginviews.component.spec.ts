import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginviewsComponent } from './loginviews.component';

describe('LoginviewsComponent', () => {
  let component: LoginviewsComponent;
  let fixture: ComponentFixture<LoginviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

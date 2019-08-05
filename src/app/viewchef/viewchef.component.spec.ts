import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchefComponent } from './viewchef.component';

describe('ViewchefComponent', () => {
  let component: ViewchefComponent;
  let fixture: ComponentFixture<ViewchefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

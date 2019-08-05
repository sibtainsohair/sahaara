import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatechefComponent } from './updatechef.component';

describe('UpdatechefComponent', () => {
  let component: UpdatechefComponent;
  let fixture: ComponentFixture<UpdatechefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatechefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVisitorComponent } from './button-visitor.component';

describe('ButtonVisitorComponent', () => {
  let component: ButtonVisitorComponent;
  let fixture: ComponentFixture<ButtonVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDescriptionComponent } from './welcome-description.component';

describe('WelcomeDescriptionComponent', () => {
  let component: WelcomeDescriptionComponent;
  let fixture: ComponentFixture<WelcomeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

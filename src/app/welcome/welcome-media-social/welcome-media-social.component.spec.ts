import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMediaSocialComponent } from './welcome-media-social.component';

describe('WelcomeMediaSocialComponent', () => {
  let component: WelcomeMediaSocialComponent;
  let fixture: ComponentFixture<WelcomeMediaSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMediaSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMediaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

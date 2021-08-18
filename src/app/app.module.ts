import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ParticlesModule } from 'angular-particle';
import { HomeComponent } from './particles/particles.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeDescriptionComponent } from './welcome/welcome-description/welcome-description.component';
import { ButtonVisitorComponent } from './button-visitor/button-visitor.component';
import { WelcomeMediaSocialComponent } from './welcome/welcome-media-social/welcome-media-social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    WelcomeDescriptionComponent,
    ButtonVisitorComponent,
    WelcomeMediaSocialComponent,
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

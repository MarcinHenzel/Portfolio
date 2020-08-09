import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MailSenderComponent } from './components/mail-sender/mail-sender.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProjectComponent } from './components/projects/project/project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { SlideInScrollDirective } from './directives/slide-in-scroll.directive';
import { WelcomeImageComponent } from './components/welcome-image/welcome-image.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TechConComponent } from './components/tech-con/tech-con.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainPageComponent,
    LazyLoadDirective,
    TechConComponent,
    FooterComponent,
    NavbarComponent,
    MailSenderComponent,
    ProjectsComponent,
    WelcomeImageComponent,
    ImageCarouselComponent,
    ProjectComponent,
    SlideInScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

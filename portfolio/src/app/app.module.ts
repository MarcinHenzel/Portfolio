import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './componenets/side-nav/side-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { TechConComponent } from './componenets/tech-con/tech-con.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componenets/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MailSenderComponent } from './components/mail-sender/mail-sender.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AboutmeComponent } from './componenets/aboutme/aboutme.component';
import { WelcomeImageComponent } from './componenets/welcome-image/welcome-image.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProjectComponent } from './components/projects/project/project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    AboutmeComponent,
    WelcomeImageComponent,
    ImageCarouselComponent,
    ProjectComponent,
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

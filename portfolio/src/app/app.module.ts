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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainPageComponent,
    LazyLoadDirective,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAsideComponent } from './custom-aside/custom-aside.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { FeedComponent } from './feed/feed.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { RatingsComponent } from './ratings/ratings.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomAsideComponent,
    CustomNavbarComponent,
    FeedComponent,
    MovieCardComponent,
    MoviedetailsComponent,
    RatingsComponent,
    NotfoundpageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

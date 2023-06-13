import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: FeedComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "movie/:movie", component: MoviedetailsComponent },
  { path: "**", component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

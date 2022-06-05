import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    NotfoundComponent,
    GithubFollowersComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }  ,
      { path: 'followers', component: GithubFollowersComponent }  ,
      { path: 'followers/:id', component: GithubProfileComponent } ,
      { path: 'posts', component: PostsComponent}  ,
      { path: '**', component: NotfoundComponent}   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

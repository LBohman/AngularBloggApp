import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewBlogComponent } from './components/create-new-blog/create-new-blog.component';
import { PostComponent } from './components/post/post.component';
import { CreateNewPostComponent } from './components/create-new-post/create-new-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BlogComponent,
    BlogDetailComponent,
    CreateNewBlogComponent,
    PostComponent,
    CreateNewPostComponent,
    PostDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

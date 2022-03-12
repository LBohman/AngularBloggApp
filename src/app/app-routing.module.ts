import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { CreateNewBlogComponent } from './components/create-new-blog/create-new-blog.component';
import { CreateNewPostComponent } from './components/create-new-post/create-new-post.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'blog/:id/post/:id', component: PostDetailComponent },
  { path: 'create-new-blog', component: CreateNewBlogComponent },
  { path: 'blog/:id/create-new-post', component: CreateNewPostComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

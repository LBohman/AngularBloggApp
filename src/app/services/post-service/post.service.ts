import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = new Subject<Post[]>();
  posts$ = this.posts.asObservable();

  constructor(private http: HttpClient) { }

  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>('https://mi-blogs.azurewebsites.net/api/Posts' + postId);
  }

  createNewPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://mi-blogs.azurewebsites.net/api/Posts/', post);
  }
}

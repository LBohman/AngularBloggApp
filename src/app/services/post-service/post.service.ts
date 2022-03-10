import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/Blog';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(blogId: number): Observable<Blog> {
    return this.http.get<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/' + blogId)
  }
}

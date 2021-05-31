import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBlogsService {

  constructor(private httpCall: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    let userId = 5020;

    return this.httpCall.get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId);
  }
}

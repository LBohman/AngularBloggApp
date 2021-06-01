import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//En service som hämtar alla bloggar tillhörande id: 5020
export class GetBlogsService {

  private blogs: Blog[] = [];
  constructor(private httpCall: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    let userId = 5020;

    if(!localStorage.getItem('blogs')) {
      //Hämta från API:et och spara i LS
      this.httpCall.get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId).subscribe((data) => {
        this.blogs = data;
        localStorage.setItem('blogs', JSON.stringify(data));
      });
    } else {
      //Hämta data från LS
      this.blogs = JSON.parse(localStorage.getItem('blogs'));
    }
    return of(this.blogs);
  }
}

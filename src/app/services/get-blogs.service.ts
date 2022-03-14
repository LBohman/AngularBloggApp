import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//En service som hämtar alla bloggar tillhörande id: 5020
export class GetBlogsService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor(private http: HttpClient) { }

  //Hämta alla bloggar
  getBlogs(): void {
    let userId = 5020;

    this.http
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId)
      .subscribe((data) => {
        this.blogs.next(data);
        localStorage.setItem('blogs', JSON.stringify(data));
      });

    // if(!localStorage.getItem('blogs')) {
    //   //Hämta från API:et och spara i LS
    //   this.http
    //   .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId)
    //   .subscribe((data) => {
    //     this.blogs.next(data);
    //     localStorage.setItem('blogs', JSON.stringify(data));
    //   });
    // } else {
    //   //Hämta data från LS
    //   this.blogs.next(JSON.parse(localStorage.getItem('blogs')));
    // }
  }

  //Hämta en blogg från LS
  getBlog(blogId: number): Blog {
    //Hämta data från LS där listan med bloggar är sparade
    let blogs: Blog[] = JSON.parse(localStorage.getItem('blogs'));

    //Gör en sökning i listan baserat på bloggens ID
    return blogs.filter(a => a.id == blogId)[0];
  }

  //Skapa en ny blogg
  createNewBlog(title: string): Observable<Blog> {
    const userId = 5020;
    return this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/', {title, userId, created: new Date()});
  }

  deleteBlog(blogId: number): Observable<Blog> {
    return this.http.delete<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/'+ blogId);
  }

  editBlog(blogId: number, title: string): Observable<Blog> {
    const userId = 5020;
    return this.http.put<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/' + blogId, { blogId, title, userId });
  }
}
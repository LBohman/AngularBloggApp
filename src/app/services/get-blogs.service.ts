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

  constructor(private httpCall: HttpClient) { }

  //Hämta alla bloggar
  getBlogs(): void {
    let userId = 5020;

    if(!localStorage.getItem('blogs')) {
      //Hämta från API:et och spara i LS
      this.httpCall
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId)
      .subscribe((data) => {
        this.blogs.next(data);
        localStorage.setItem('blogs', JSON.stringify(data));
      });
    } else {
      //Hämta data från LS
      this.blogs.next(JSON.parse(localStorage.getItem('blogs')));
    }
  }

  //Hämta en blogg från LS
  getBlog(blogId: number): Blog {
    //Hämta data från LS där listan med bloggar är sparade
    let blogs: Blog[] = JSON.parse(localStorage.getItem('blogs'));

    //Gör en sökning i listan baserat på bloggens ID
    return blogs.filter(a => a.id == blogId)[0];
  }

  //Skapa en ny blogg
  postBlog(blog: Blog): void {
    this.httpCall.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/', blog);
  }
}
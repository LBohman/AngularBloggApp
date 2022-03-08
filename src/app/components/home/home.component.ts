import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBlogsService } from 'src/app/services/get-blogs.service';
import { Blog } from '../../models/Blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public blogs: Blog[] = [];
  constructor(private blogService: GetBlogsService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.blogs$.subscribe(data => {
      this.blogs = data;
    });
    this.blogService.getBlogs();
  }

  navigateCreateBlog(): void {
    this.router.navigate(['/create-new-blog']);
  }

}

import { Component, OnInit } from '@angular/core';
import { GetBlogsService } from 'src/app/services/get-blogs.service';
import { Blog } from '../../models/Blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public blogs: Blog[] = [];
  constructor(private blogService: GetBlogsService) { }

  ngOnInit(): void {
    this.blogService.blogs$.subscribe(data => {
      this.blogs = data;
    });
    this.blogService.getBlogs();
  }

}

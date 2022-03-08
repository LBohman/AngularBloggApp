import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { GetBlogsService } from 'src/app/services/get-blogs.service';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.scss']
})
export class CreateNewBlogComponent implements OnInit {

  constructor( private fb: FormBuilder, private blogService: GetBlogsService, private router: Router ) { }

  blogs: Blog[] = [];
  blogForm = this.fb.group({
    title: ['']
  });

  
  ngOnInit(): void {}

  onSubmit(blogTitle: string): void {
    this.blogService.createNewBlog(blogTitle).subscribe((newBlog: Blog) => {
      this.blogs.push(newBlog);
      this.router.navigate(['/']);
    })
    }

    cancel(): void {
      this.router.navigate(['/']);
    }
  }

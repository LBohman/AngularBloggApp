import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { CreateNewBlogService } from 'src/app/services/create-new-blog.service';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.scss']
})
export class CreateNewBlogComponent implements OnInit {

  constructor(private blogService: CreateNewBlogService) { }

  title = new FormControl('');
  
  ngOnInit(): void {}

  // createNewBlog() {
  //   let newBlog = new Blog(this.title.value, new Date());
  //   this.blogService.postNewBlog(newBlog).subscribe.((data) => {
  //     this.blogs.push((data));
  //   })
  // }
}

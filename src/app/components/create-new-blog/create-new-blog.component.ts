import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { GetBlogsService } from 'src/app/services/get-blogs.service';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.scss']
})
export class CreateNewBlogComponent implements OnInit {

  constructor( private fb: FormBuilder, private blogService: GetBlogsService ) { }

  blogForm = this.fb.group({
    title: ['']
  });

  
  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.blogForm.value);
    
    }
    
  }

  // createNewBlog() {
  //   let newBlog = new Blog(this.title.value, new Date());
  //   this.blogService.postNewBlog(newBlog).subscribe.((data) => {
  //     this.blogs.push((data));
  //   })
  // }

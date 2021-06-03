import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.scss']
})
export class CreateNewBlogComponent implements OnInit {

  constructor() { }

  title = new FormControl('');
  
  ngOnInit(): void {
  }

}

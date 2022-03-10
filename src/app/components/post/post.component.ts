import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit { 
  @Input() post: Post;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPostDetail(): void {
    this.router.navigate(['blog/' + this.post.blogId + '/post/' + this.post.id]);
  }

}

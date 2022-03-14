import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post-service/post.service';
import { Blog } from 'src/app/models/Blog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.scss']
})
export class CreateNewPostComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private postService: PostService, private route: ActivatedRoute) { }

  posts: Post[];
  postForm = this.fb.group({
    title: [''],
    content: ['']
  });

  newPost: Post;
  postId: number = 0;
  blogId: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });
  }

  onSubmit(postTitle: string, postContent: string): void {
    this.newPost = new Post(
      this.postId,
      postTitle,
      postContent,
      new Date(),
      this.blogId
    );
    this.postService.createNewPost(this.newPost).subscribe((post: Post) => {
      this.router.navigate(['blog/', this.blogId]);
    })
  }

  cancel(): void {
    this.router.navigate(['blog/', this.blogId]);
  }
}

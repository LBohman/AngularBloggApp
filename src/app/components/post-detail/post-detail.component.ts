import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post-service/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id: number = 0;
  post: Post;
  comments: Comment[];

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.postService.getPost(this.id).subscribe((post) => {
        this.post = post;
        console.log(this.post);
        this.comments = post.comments;
      });
    })
  }

  backToAllPosts(): void {
    this.router.navigate(['/blog/' + this.post.blogId]);
  }

}

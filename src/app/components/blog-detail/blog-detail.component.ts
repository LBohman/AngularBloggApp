import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { GetBlogsService } from 'src/app/services/get-blogs.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  //Lagrar parametervärdet id
  id: number = 0;
  //Skapar ett värde blog, med datatypen Blog
  blog: Blog;
  posts: Post[];

  constructor(
    private route: ActivatedRoute, private router: Router , private service: GetBlogsService) { }

  ngOnInit(): void {
    //Tittar på parametern i url:en, vilket kommer vara id:et som är ett tal
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));

      //Via tjänsten använda id:et för att visa den specifika bloggen som önskas
      this.blog = this.service.getBlog(this.id);

      this.posts = this.blog.posts;
    });
  }

  handleBlogDelete(): void {
    const id = this.blog.id;
    this.service.deleteBlog(id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  navigateCreatePost(): void {
    this.router.navigate(['/blog/' + this.blog.id + '/create-new-post']);
  }
}

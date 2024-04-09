import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/Post.model";
import {PostService} from "../../../../services/Post/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

  delete(post: Post) {
    this.postService.deletePost(post).subscribe(data => {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    })
  }

}

import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/Post/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsComponent implements OnInit {

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

  delete(post: Post){
    this.postService.deletePost(post).subscribe(data => {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    })
  }
}

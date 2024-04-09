import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPost(postId: number){
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/post/${postId}`);
  }

  updatePost(post: Post) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  deletePost(post: Post) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}

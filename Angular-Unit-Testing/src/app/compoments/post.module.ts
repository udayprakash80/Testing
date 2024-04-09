import {NgModule} from "@angular/core";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";

@NgModule({
  declarations: [PostsComponent, PostComponent, PostDetailComponent],
  exports: [PostsComponent, PostComponent, PostDetailComponent]
})
export class PostModule {}

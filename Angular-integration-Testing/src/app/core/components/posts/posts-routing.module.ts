import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import {PostDetailsComponent} from "./post-details/post-details.component";
import {PostComponent} from "./post/post.component";
import {PostListComponent} from "./post-list/post-list.component";

const routes: Routes = [
                        { path: '', component: PostsComponent, children: [
                            {path: '', component: PostListComponent},
                            {path: 'postDetails/:id', component: PostDetailsComponent}
                          ] }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostDetailComponent} from "./compoments/post-detail/post-detail.component";
import {PostsComponent} from "./compoments/posts/posts.component";

const routes: Routes = [
  {path: 'details', component: PostsComponent},
  {path: 'details/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

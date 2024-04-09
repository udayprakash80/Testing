import { NgModule } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostListComponent
  ],
    imports: [
        CommonModule,
        PostsRoutingModule,
        NgForOf,
        NgIf,
        FormsModule,
        NgIf,
        NgIf,
        ReactiveFormsModule
    ]
})
export class PostsModule { }

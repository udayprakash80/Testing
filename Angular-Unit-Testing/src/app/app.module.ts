import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './pipes/Strength/strength.pipe';
import { PostsComponent } from './compoments/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './compoments/post/post.component';
import { PostDettailComponent } from './compoments/post-dettail/post-dettail.component';
import { PostDetailComponent } from './compoments/post-detail/post-detail.component';
import {FormsModule} from "@angular/forms";
import {PostModule} from "./compoments/post.module";

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent,
    PostDettailComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PostModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

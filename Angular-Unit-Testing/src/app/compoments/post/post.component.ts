import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Post} from "../../models/Post";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  constructor() {
  }

  @Input() post!: Post;

  @Output() delete = new EventEmitter<Post>();

  onDeletePost(event: Event){
    event.preventDefault();
    this.delete.emit(this.post);
  }

}

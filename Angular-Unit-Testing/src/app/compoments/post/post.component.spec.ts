import { PostComponent } from './post.component';
import {Post} from "../../models/Post";
import {first} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  })
  it('should create post component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should render the post title in anchor element', () => {
    const post: Post = {id: 1, title: 'title 1', body: 'body'};
    component.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);

    const button = postElement.querySelector('button');
    expect(button?.textContent).toContain('Delete Post')
  });

  it('should render the post title in anchor HTML element using debug element', () => {
    const post: Post = {id: 1, title: 'title 1', body: 'body'};
    component.post = post;
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const postElement: HTMLElement = debugElement.query(By.css('a')).nativeElement;
    expect(postElement?.textContent).toContain(post.title);
  });


  it('should call emit event when the delete post is clicked', () => {
    const post: Post = {id: 1, title: 'title', body: 'body'};
    component.post = post;
    component.delete.pipe(first()).subscribe(selectedPost => {
      expect(selectedPost).toEqual(post);
    });
    component.onDeletePost(new MouseEvent('click'));
  });



});

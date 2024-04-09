import {Post} from "../../models/Post";
import {PostsComponent} from "./posts.component";
import {PostService} from "../../services/Post/post.service";
import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, DebugElement, Input, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {PostComponent} from "../post/post.component";

// class mockPostService {
//   getPosts(){
//
//   }
//   deletePost(post: Post){
//     return of(true);
//   }
// }

describe('postsComponent', () => {
  let posts: Post[];
  let component: PostsComponent;
  let mockPostService: jasmine.SpyObj<PostService>;
  let fixture: ComponentFixture<PostsComponent>;

  // @Component({
  //   selector: 'app-post',
  //   template: '<div></div>'
  // })
  // class FakePostComponent{
  //   @Input() post!: Post;
  // }

  beforeEach(() => {
    posts = [
      { id: 1, body: 'body 1', title: 'title 1'},
      { id: 2, body: 'body 2', title: 'title 2'},
      { id: 3, body: 'body 3', title: 'title 3'}
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService
        }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create exact same number of post component with posts', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    const postComponentDES: DebugElement[] = fixture.debugElement.queryAll(By.directive(PostComponent));
    expect(postComponentDES.length).toBe(posts.length);
  });

  it('should check whether exact  post is sending to postComponent', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    const postComponentDEs: DebugElement[] = fixture.debugElement.queryAll(By.directive(PostComponent));
    postComponentDEs.forEach((value, index, array) => {
      const postComponentInstance = value.componentInstance;
      expect(postComponentInstance.post.title).toBe(posts[index].title);
    })
  });

  it('should set posts data from post service directly', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    expect(component.posts.length).toBe(3);
  });

  it('should create one post child element for each post', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const postElement = debugElement.queryAll(By.css(".posts"));
    expect(postElement.length).toBe(posts.length);
  })

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
    })
    it('should delete post from post', () => {
      component.delete(posts[2]);
      expect(component.posts.length).toBe(2);
    });

    it('should delete actual post', () => {
      component.delete(posts[2]);
      component.posts.forEach((post) => {
        expect(post).not.toEqual(posts[2]);
      })
    });

    it('should delete method in post service only once', () => {
      component.delete(posts[2]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('should call delete method when postComponent button click', () => {
      spyOn(component, 'delete');
      mockPostService.getPosts.and.returnValue(of(posts));
      fixture.detectChanges();
      const postElements = fixture.debugElement.queryAll(By.directive(PostComponent));
      postElements.forEach((value, index, array)=>{
        postElements[index].query(By.css('button')).triggerEventHandler('click', { preventDefault: () => {} });
        expect(component.delete).toHaveBeenCalledWith(posts[index]);
      })
    });

    it('should call the delete method when the delete event is emitted in post componet', ()=> {
      spyOn(component, 'delete');
      mockPostService.getPosts.and.returnValue(of(posts));
      fixture.detectChanges();
      const postElements = fixture.debugElement.queryAll(By.directive(PostComponent));
      postElements.forEach((value, index, array)=>{
        (postElements[index].componentInstance as PostComponent).delete.emit(posts[index]);
        expect(component.delete).toHaveBeenCalledWith(posts[index])
      });
    })
  })
})


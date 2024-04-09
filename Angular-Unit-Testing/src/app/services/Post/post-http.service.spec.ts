import {PostService} from "./post.service";
import {Post} from "../../models/Post";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Post Service', ()=> {
  let postService: PostService;
  let posts: Post[];
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    posts = [
      { id: 1, body: 'body 1', title: 'title 1'},
      { id: 2, body: 'body 2', title: 'title 2'},
      { id: 3, body: 'body 3', title: 'title 3'}
    ];
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule]
    });
    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });



  describe('httpTestingModule getPosts()', () => {
    it('should return expected posts when getposts is called', (done: DoneFn) => {
      postService.getPosts().subscribe(data => {
        expect(data).toEqual(posts);
        done();
      });
      // postService.deletePost(posts[0]).subscribe();
      const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
      request.flush(posts);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('httpTestingModule getPost()', () => {
    it('should return single post when getpost is called', (done: DoneFn) => {
      postService.getPost(1).subscribe(data => {
        expect(data).toEqual(posts[0]);
        done();
      });
      // postService.getPost(2).subscribe();
      const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/post/1');
      request.flush(posts[0]);
      expect(request.request.method).toBe('GET');
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  })
})

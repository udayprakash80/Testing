import {PostService} from "./post.service";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {Post} from "../../models/Post";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Post Service', ()=> {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let posts: Post[];

  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    posts = [
      { id: 1, body: 'body 1', title: 'title 1'},
      { id: 2, body: 'body 2', title: 'title 2'},
      { id: 3, body: 'body 3', title: 'title 3'}
    ];
    TestBed.configureTestingModule({
      providers: [PostService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj
        }
      ]
    });
    postService = TestBed.inject(PostService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('getPosts()', () => {
    it('should return expected posts when getposts is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(posts));
      postService.getPosts().subscribe(data => {
        expect(data).toEqual(posts);
        done();
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
})

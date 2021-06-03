import { TestBed } from '@angular/core/testing';

import { CreateNewBlogService } from './create-new-blog.service';

describe('CreateNewBlogService', () => {
  let service: CreateNewBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNewBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

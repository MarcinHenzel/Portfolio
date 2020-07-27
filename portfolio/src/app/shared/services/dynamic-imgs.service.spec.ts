import { TestBed } from '@angular/core/testing';

import { DynamicImgsService } from './dynamic-imgs.service';

describe('DynamicImgsService', () => {
  let service: DynamicImgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicImgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

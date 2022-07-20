import { TestBed } from '@angular/core/testing';

import { PhotocardsService } from './photocards.service';

describe('PhotocardsService', () => {
  let service: PhotocardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotocardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { GoodReadsService } from './good-reads.service';

describe('GoodReadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodReadsService]
    });
  });

  it('should ...', inject([GoodReadsService], (service: GoodReadsService) => {
    expect(service).toBeTruthy();
  }));
});

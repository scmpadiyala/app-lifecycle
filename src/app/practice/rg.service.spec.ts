import { TestBed, inject } from '@angular/core/testing';

import { RgService } from './rg.service';

describe('RgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RgService]
    });
  });

  it('should be created', inject([RgService], (service: RgService) => {
    expect(service).toBeTruthy();
  }));
});

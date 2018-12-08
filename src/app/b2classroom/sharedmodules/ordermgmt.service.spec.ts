import { TestBed, inject } from '@angular/core/testing';

import { OrdermgmtService } from './ordermgmt.service';

describe('OrdermgmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdermgmtService]
    });
  });

  it('should be created', inject([OrdermgmtService], (service: OrdermgmtService) => {
    expect(service).toBeTruthy();
  }));
});

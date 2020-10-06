import { TestBed } from '@angular/core/testing';

import { ClaimticketService } from './claimticket.service';

describe('ClaimticketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimticketService = TestBed.get(ClaimticketService);
    expect(service).toBeTruthy();
  });
});

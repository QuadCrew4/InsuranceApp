import { TestBed } from '@angular/core/testing';

import { ClaimhistoryService } from './claimhistory.service';

describe('ClaimhistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimhistoryService = TestBed.get(ClaimhistoryService);
    expect(service).toBeTruthy();
  });
});

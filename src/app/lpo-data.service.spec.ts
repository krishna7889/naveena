import { TestBed } from '@angular/core/testing';

import { LpoDataService } from './lpo-data.service';

describe('LpoDataService', () => {
  let service: LpoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

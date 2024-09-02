import { TestBed } from '@angular/core/testing';

import { SuprsendService } from './suprsend.service';

describe('SuprsendService', () => {
  let service: SuprsendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuprsendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoadFromJsonService } from './load-from-json.service';

describe('LoadFromJsonService', () => {
  let service: LoadFromJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadFromJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ActivateLinkColorService } from './activate-link-color.service';

describe('ActivateLinkColorService', () => {
  let service: ActivateLinkColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivateLinkColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

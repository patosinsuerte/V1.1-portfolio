import { TestBed } from '@angular/core/testing';

import { ScrollToService } from './scroll-to.service';

describe('ScrollToService', () => {
  let service: ScrollToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

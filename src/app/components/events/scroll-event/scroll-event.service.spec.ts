import { TestBed } from '@angular/core/testing';

import { ScrollEventService } from './scroll-event.service';

describe('ScrollEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollEventService = TestBed.get(ScrollEventService);
    expect(service).toBeTruthy();
  });
});

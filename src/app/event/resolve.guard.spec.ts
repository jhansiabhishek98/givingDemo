import { TestBed } from '@angular/core/testing';

import { ResolveGuard } from './resolve.guard';

describe('ResolveGuard', () => {
  let guard: ResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveGuard);
  });

  xit('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

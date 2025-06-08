import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authmatchGuard } from './authmatch.guard';

describe('authmatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authmatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

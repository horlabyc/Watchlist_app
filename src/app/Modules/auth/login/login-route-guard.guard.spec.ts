import { TestBed, async, inject } from '@angular/core/testing';

import { LoginRouteGuardGuard } from './login-route-guard.guard';

describe('LoginRouteGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRouteGuardGuard]
    });
  });

  it('should ...', inject([LoginRouteGuardGuard], (guard: LoginRouteGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

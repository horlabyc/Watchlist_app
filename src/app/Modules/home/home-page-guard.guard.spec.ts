import { TestBed, async, inject } from '@angular/core/testing';

import { HomePageGuardGuard } from './home-page-guard.guard';

describe('HomePageGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePageGuardGuard]
    });
  });

  it('should ...', inject([HomePageGuardGuard], (guard: HomePageGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PeriodicTaskService } from './periodic-task.service';

describe('PeriodicTaskService', () => {
  let service: PeriodicTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
